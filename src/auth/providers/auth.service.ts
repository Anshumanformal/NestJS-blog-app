import { Inject, forwardRef, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin.dto';
import { SignInProvider } from './sign-in.provider';
import { RefreshTokensProvider } from './refresh-tokens.provider';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(()=> UsersService))
        private readonly usersService: UsersService,
        private readonly signInProvider: SignInProvider,
        private readonly refreshTokenProvider: RefreshTokensProvider
    ){}

    public async signIn(signInDto: SignInDto) {
        return await this.signInProvider.signIn(signInDto)
    }

    public async refreshTokens(refreshTokenDto: RefreshTokenDto){
        return await this.refreshTokenProvider.refreshTokens(refreshTokenDto)
    }

}
