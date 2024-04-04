import { Controller, Post, Get, Body } from '@nestjs/common';
import { AuthDto } from 'src/dto/auth.dto';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign-up')
  async signUp(@Body() userData: AuthDto): Promise<object> {
    return await this.authService.signUp(userData);
  }

  @Get('/sign-in')
  async signIn(@Body() userData: AuthDto): Promise<object> {
    return await this.authService.signIn(userData);
  }
}
