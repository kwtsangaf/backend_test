import {Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {ConfigService} from '../config/config.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
    ) {
    }

    async signIn(): Promise<string> {
        // In the real-world app you shouldn't expose this method publicly
        // instead, return a token once you verify user credentials
        const payload = {};
        return this.jwtService.sign(payload);
    }

    validateUser(payload: string) {
        return true;
    }
}
