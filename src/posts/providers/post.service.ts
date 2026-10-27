import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dtos/patch-post.dto';
import { GetPostsDto } from '../dtos/get-posts.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';
import { CreatePostProvider } from './create-post.provider';
import { ActiveUserData } from 'src/auth/interfaces/active-user-data.interface';

@Injectable()
export class PostsService {
    constructor(

        private readonly usersService: UsersService,
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
        @InjectRepository(MetaOption)
        private readonly metaOptionRepository: Repository<MetaOption>,
        private readonly tagsService: TagsService,
        private readonly paginationProvider: PaginationProvider,
        private readonly createPostProvider: CreatePostProvider
    ){}

    public async create(createPostDto: CreatePostDto, user: ActiveUserData){
        return await this.createPostProvider.create(createPostDto, user)
    }

    // public async create(@Body() createPostDto: CreatePostDto){

    //     let author = await this.usersService.findOneById(createPostDto.authorId)
    //     let tags = await this.tagsService.findMultipleTags(createPostDto.tags)
    //     let post = this.postRepository.create({
    //         ...createPostDto,
    //         author,
    //         tags
    //     })
    //     return await this.postRepository.save(post)

        
        // ------------------------------------------------------------
        // Using cascade: true on the metaOptions field, in post.entity.ts file
        // let post = this.postRepository.create(createPostDto)
        // return await this.postRepository.save(post)

        // ------------------------------------------------------------
        // Without cascade: true, multiple checks have to be performed
        // Create metaOptions
        // let metaOptions = createPostDto.metaOptions 
        // ? this.metaOptionRepository.create(createPostDto.metaOptions) 
        // : null
        // // Create post
        // if(metaOptions) {
        //     await this.metaOptionRepository.save(metaOptions)
        // }
        // // Add metaOptions to the post
        // let post = this.postRepository.create(createPostDto)
        // if(metaOptions){
        //     post.metaOptions = metaOptions
        // }
        // // return the post
        // return await this.postRepository.save(post)
    // }

    // Moved to pagination.provider.ts for more modular pagination approach
    // Older implementation
    // public async findAll(postQuery: GetPostsDto, userId: number){
    //     let posts = await this.postRepository.find({
    //         relations: {
    //             metaOptions: true,
    //             author: true,
    //             // tags: true
    //         },
    //         skip: (postQuery.page - 1) * postQuery.limit,
    //         take: postQuery.limit
    //     })
    //     return posts;
    // }

    public async findAll(postQuery: GetPostsDto, userId: number): Promise<Paginated<Post>>{
        let posts = await this.paginationProvider.paginateQuery({
            limit: postQuery.limit,
            page: postQuery.page
        }, this.postRepository)
        return posts
    }

    public async update(@Body() patchPostDto: PatchPostDto){
        // Find the tags
        let tags = await this.tagsService.findMultipleTags(patchPostDto.tags)
        // Find the posts associated with the tags
        let post = await this.postRepository.findOneBy({
            id: patchPostDto.id
        })

        // Update the properties
        post.title = patchPostDto.title ?? post.title
        post.content = patchPostDto.content ?? post.content
        post.status = patchPostDto.status ?? post.status
        post.postType = patchPostDto.postType ?? post.postType
        post.slug = patchPostDto.slug ?? post.slug
        post.featuredImageUrl = patchPostDto.featuredImageUrl ?? post.featuredImageUrl
        post.publishOn = patchPostDto.publishOn ?? post.publishOn

        // Assign the new tags
        post.tags = tags
        // Save the post and return
        return await this.postRepository.save(post)
    }

    public async delete(id: number){

        await this.postRepository.delete(id)
        return {deleted: true, id}
        
        // let post = await this.postRepository.findOneBy({id})

        // if(post){
        //     await this.postRepository.delete(id)
        //     return {deleted: true, id}
        // }
        // else 
        //     return {deleted: false, message: 'id not found'}

        // Another way
        // let inversePost = await this.metaOptionRepository.find({
        //     where: {id: post.metaOptions.id},
        //     relations: {
        //         post: true
        //     }
        // })

        // console.log(inversePost)
    }
}
