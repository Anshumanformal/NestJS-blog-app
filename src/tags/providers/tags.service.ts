import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { In, Repository } from 'typeorm';
import { Tag } from '../tag.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(Tag)
        private readonly tagsRepository: Repository<Tag>
    ){}

    public async create(createTagDto: CreateTagDto){
        let tag = this.tagsRepository.create(createTagDto)
        return await this.tagsRepository.save(tag)
    }

    public async findMultipleTags(tags: number[]){
        let results = this.tagsRepository.find({
            where: {
                id: In(tags)
            }
        })

        return results
    }

    public async listAllTags(){
        return await this.tagsRepository.find()
    }

    public async delete(id: number) {
        await this.tagsRepository.delete(id)
        return {
            id,
            isDelete: true
        }
    }

    public async softRemove(id: number) {
        await this.tagsRepository.softDelete(id)
        return {
            id,
            isDelete: true
        }
    }
}
