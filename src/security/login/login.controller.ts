import { Body, Controller, HttpStatus, Post, Req, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { User } from '../user.enum';
import { LoginDto } from '../dto/login.dto';

@Controller('login')
export class LoginController {

  /**
   * 
   * @param req 
   * @returns jwt token
   */
  @Post()
  login(@Body() req: LoginDto) {
    const username = req.username;
    const password = req.password;

    if (username !== User.USER_NAME || password !== User.PASSWORD) {
      throw new UnauthorizedException(HttpStatus.UNAUTHORIZED);
    }

    const payload = { username, org_id: process.env?.USER_ORG_ID };
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '3500h' });
    const refreshToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '7000h' });

    return { access_token: accessToken, refresh_token: refreshToken };
  }
}
