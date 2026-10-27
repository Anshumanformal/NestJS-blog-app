import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { PostsService } from './providers/post.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';
import { GetPostsDto } from './dtos/get-posts.dto';
import { ActiveUser } from 'src/auth/decorator/active-user.decorator';
import { ActiveUserData } from 'src/auth/interfaces/active-user-data.interface';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService
    ){}

    @ApiOperation({
        summary: 'Retrieves a blog post'
    })
    @ApiResponse({
        status: 200,
        description: 'You get a 200 response if your post is retrieved successfully'
    })
    @Get('/:userId?')
    public getPosts(
        @Param('userId') userId: number,
        @Query() postQuery: GetPostsDto
    ){
        return this.postsService.findAll(postQuery, userId)
    }

    @ApiOperation({
        summary: 'Creates a new blog post'
    })
    @ApiResponse({
        status: 201,
        description: 'You get a 201 response if your post is created successfully'
    })
    @Post()
    public createPost(
        @Body() createPostDto: CreatePostDto,
        @ActiveUser() user: ActiveUserData
    ){
        return this.postsService.create(createPostDto, user)
    }

    @ApiOperation({
        summary: 'Updates an existing blog post'
    })
    @ApiResponse({
        status: 200,
        description: 'You get a 200 response if your post is updated successfully'
    })
    @Patch()
    public updatePost(@Body() patchPostDto: PatchPostDto){
        return this.postsService.update(patchPostDto)
    }

    @ApiOperation({
        summary: 'Deletes an existing blog post'
    })
    @ApiResponse({
        status: 200,
        description: 'You get a 200 response if your post is deleted successfully'
    })
    @Delete()
    public deletePost(@Query('id', ParseIntPipe) id: number){
        let result = this.postsService.delete(id)
        return result
    }
}
