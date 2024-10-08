import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { passwordToHash } from 'src/helper/crypto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    if(!signInDto.password) throw new HttpException('Password field null', HttpStatus.BAD_REQUEST);
    signInDto.password = passwordToHash(signInDto.password)
    return this.authService.signIn(signInDto.email, signInDto.password);
  }


  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}