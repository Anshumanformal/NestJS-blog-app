import { IsArray, IsNotEmpty, ValidateNested } from "class-validator";
import { CreateUserDto } from "./create-user.dto";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreateManyUsersDto {
    
    @ApiProperty({
        description: "Create multiple users at once"
    })
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => CreateUserDto)
    users: CreateUserDto[]
}