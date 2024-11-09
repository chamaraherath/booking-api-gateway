import { Injectable, CanActivate, ExecutionContext, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { InvalidTokenException } from 'src/exception/invalid-token.exception';
import { ErrorMessage } from 'src/helper/sample-response.helper';


@Injectable()
export class AuthGuard implements CanActivate {

  /**
   * 
   * @param context 
   * @returns boolean
   */
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        if (!request.headers.authorization) {
          throw new InvalidTokenException(ErrorMessage.TOKEN_REQUIRED,HttpStatus.FORBIDDEN, HttpStatus.FORBIDDEN);
        }
        request.user = await this.validateToken(request.headers.authorization);
        return true;
      }
    
      async validateToken(auth: string) {

        if (auth.split(' ')[0] !== 'Bearer') {
          throw new InvalidTokenException(ErrorMessage.INVALID_TOKEN,HttpStatus.FORBIDDEN, HttpStatus.FORBIDDEN);
        }
    
        const token = auth.split(' ')[1];
    
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
          return decoded;
        } catch (err) {
          throw new InvalidTokenException(ErrorMessage.TOKEN_EXPIRED, HttpStatus.FORBIDDEN,HttpStatus.FORBIDDEN);
        }

      }

  }