import { Controller, Post, Get, Param, Query, Body, ParseIntPipe, DefaultValuePipe, Ip, Headers, ValidationPipe, Patch, UseGuards, SetMetadata, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateManyUsersDto } from './dtos/create-many-users.dto';
import { AccessTokenGuard } from 'src/auth/guards/access-token/access-token.guard';
import { AuthType } from 'src/auth/enums/auth-type.enum';
import { Auth } from 'src/auth/decorator/auth.decorator';

@Controller('users')
@ApiTags('Users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}
    
    @Get('/:id?')
    @ApiOperation({
        summary: 'Fetches a list of registered users in the application'
    })
    @ApiResponse({
        status: 200,
        description: 'Users fetched successfully'
    })
    @ApiQuery({
        name: 'limit',
        type: 'number',
        required: false,
        description: 'The number of entries returned per query',
        example: 10
    })
    @ApiQuery({
        name: 'page',
        type: 'number',
        required: false,
        description: 'The position of the page number that you want the API to return',
        example: 1
    })
    public getUsers(
        @Param() getUsersParamDto: GetUsersParamDto,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number | undefined,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number | undefined
    ) {
        return this.usersService.findAll(getUsersParamDto, limit, page);
    }

    public findOneById(id: number) {
        return this.usersService.findOneById(id);
    }

    @Post()
    // @SetMetadata('authType', 'none') // Implemented earlier
    @Auth(AuthType.Bearer)
    @UseInterceptors(ClassSerializerInterceptor)
    public createUser(
        @Body() createUserDto: CreateUserDto
    ) {
        return this.usersService.createUser(createUserDto)
    }

    // @UseGuards(AccessTokenGuard)
    @Post('create-many')
    public createManyUsers(
        @Body() createManyUsersDto: CreateManyUsersDto
    ) {
        return this.usersService.createMany(createManyUsersDto)
    }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto){
        return patchUserDto;
    }
}