import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { DataSource, Repository } from "typeorm";
import { User } from "../users.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";
import { ConfigService, ConfigType } from "@nestjs/config";
import profileConfig from "../config/profile.config";
import { UsersCreateManyProvider } from "./users-create-many.provider";
import { CreateManyUsersDto } from "../dtos/create-many-users.dto";
import { CreateUserProvider } from "./create-user.provider";
import { FindOneUserByEmailProvider } from "./find-one-user-by-email.provider";

/**
 * Class to connect to users table and perform business operations
 */
@Injectable()
export class UsersService {
    constructor(
        // @Inject(forwardRef(()=> AuthService))
        // private readonly authService: AuthService
        @InjectRepository(User)
        private userRepository: Repository<User>,

        // This was using a general configuration service
        // private readonly configService: ConfigService

        // Below is a module specific configuration
        @Inject(profileConfig.KEY)
        private readonly profileConfiguration: ConfigType<typeof profileConfig>,

        private readonly usersCreateManyProvider: UsersCreateManyProvider,
        private readonly createUserProvider: CreateUserProvider,
        private readonly findUserByEmailProvider: FindOneUserByEmailProvider
    ){}

    public async createUser(createUserDto: CreateUserDto){
        return this.createUserProvider.createUser(createUserDto)
    }

    /**
     * Method to get all the users from the database
     */
    public findAll(getUsersParamDto: GetUsersParamDto, limit: number, page: number){
        // const isAuth = this.authService.isAuth()
        console.log(getUsersParamDto)
        if(getUsersParamDto.id) {
            return this.userRepository.findOne({
                where: {
                    id: getUsersParamDto.id
                }
            })
        }
        else return this.userRepository.find()
        
    }

    public async findOneById(id: number) {
        return await this.userRepository.findOneBy({id})
    }

    public async createMany(createManyUsersDto: CreateManyUsersDto){
        return await this.usersCreateManyProvider.createMany(createManyUsersDto)
    }

    public async findOneByEmail(email: string){
        return await this.findUserByEmailProvider.findOneByEmail(email)
    }

}