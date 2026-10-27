import { Inject, Injectable } from '@nestjs/common';
import { User } from '../users.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ConfigType } from '@nestjs/config';
import profileConfig from '../config/profile.config';
import { DataSource } from 'typeorm';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';

@Injectable()
export class UsersCreateManyProvider {

    constructor(
        // Below is a module specific configuration
        @Inject(profileConfig.KEY)
        private readonly profileConfiguration: ConfigType<typeof profileConfig>,

        private readonly dataSource: DataSource
    ){}
    public async createMany(createManyUsersDto: CreateManyUsersDto){

        let newUsers: User[] = []

        // Create queryRunner instance
        const queryRunner = this.dataSource.createQueryRunner()

        // Connect queryRunner to dataSource
        await queryRunner.connect()

        // Start transaction
        await queryRunner.startTransaction()

        try {
            for(let user of createManyUsersDto.users) {
                let newUser = queryRunner.manager.create(User, user)
                let result = await queryRunner.manager.save(newUser)
                newUsers.push(result)
            }
            // If successful, commit the transaction
            await queryRunner.commitTransaction()
        } catch (error) {
            // If unsuccessful, rollback the transaction
            await queryRunner.rollbackTransaction()   
        } finally {
            // Release the connection
            await queryRunner.release()
        }
        return newUsers
    }
}
