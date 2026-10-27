import { IsArray, IsDate, IsEnum, IsInt, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength, ValidateNested } from "class-validator";
import { postType } from "../enums/postType.enum";
import { postStatus } from "../enums/postStatus.enum";
import { CreatePostMetaOptionsDto } from "../../meta-options/dtos/create-post-meta-options.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({
        example: "This is a title",
        description: "Title for the blog post"
    })
    @IsString()
    @MinLength(4)
    @MaxLength(512)
    @IsNotEmpty()
    title: string;

    @ApiProperty({
        enum: postType,
        description: "Possible values, 'post', 'page', 'story', 'series"
    })
    @IsEnum(postType)
    @IsNotEmpty()
    postType: postType;

    @ApiProperty({
        description: "For eg. - my-slug-123",
        example: "my-blog-post"
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{
        message: 'A slug should be all small letters, and uses only "-" and without spaces. For eg. my-url'
    })
    @MaxLength(256)
    slug: string;

    @ApiProperty({
        enum: postStatus,
        description: "Possible values, 'draft', 'scheduled', 'review', 'published"
    })
    @IsEnum(postStatus)
    @IsNotEmpty()
    status: postStatus;

    @ApiPropertyOptional({
        description: "This is the content of the post",
        example: "The post content"
    })
    @IsString()
    @IsOptional()
    content?: string;

    @ApiPropertyOptional({
        description: "Serialize your JSON object else validation error will be thrown",
        example: "{}"
    })
    @IsOptional()
    @IsJSON()
    schema?: string;

    @ApiPropertyOptional({
        description: "Featured image for your blog post",
        example: "https://static.vecteezy.com/system/resources/thumbnails/083/933/835/small/beautiful-and-inspiring-picture-detailing-a-bright-hot-air-balloon-over-river-pure-cozy-perfect-for-creatives-moods-stock-image-free-photo.jpeg"
    })
    @IsOptional()
    @IsUrl()
    @MaxLength(1024)
    featuredImageUrl?: string;

    @ApiPropertyOptional({
        description: "The date on which the blog is published",
        example: "2026-09-23T12:32:00Z"
    })
    @IsISO8601()
    @IsOptional()
    publishOn?: Date;

    @ApiPropertyOptional({
        description: "Array of ids of tags",
        example: [1, 2]
    })
    @IsOptional()
    @IsArray()
    @IsInt({each : true})
    tags?: number[];

    @ApiPropertyOptional({
        type: 'object',
        required: false,
        items: {
            type: 'object',
            properties: {
                metaValue: {
                    type: 'string',
                    description: 'The metaValue is a JSON string',
                    example: '{"sidebarEnabled" : true}'
                }
            }
        }
    })
    @IsOptional()
    @ValidateNested({each : true})
    @Type(() => CreatePostMetaOptionsDto)
    metaOptions?: CreatePostMetaOptionsDto | null
}