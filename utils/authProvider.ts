import { sign, TokenExpiredError, verify } from 'jsonwebtoken';

export type Token = {
    accessToken: string;
    refreshToken: string;
}

export type TokenPayload = {
    userId: string;
}

export class AuthProvider {
    constructor() {}

    createAuthToken(userId: string): Token {
        return {
            accessToken: sign({ userId }, process.env.APP_JWT_SECRET!, { expiresIn: '6d' }),
            refreshToken: sign({ userId }, process.env.APP_JWT_REFRESH!, { expiresIn: '6d' }),
        }
    }

    verifyToken(token: Token) {
        try {
            const accessToken = token.accessToken?.replace('Bearer ', '');
            return verify(accessToken, process.env.APP_JWT_SECRET!) as TokenPayload;
          } catch (error) {
            if (error instanceof TokenExpiredError) {
              return this.verifyRefreshToken(token);
            } else {
              throw error;
            }
          }
    }
    
    verifyRefreshToken(token: Token): TokenPayload {
        const refreshToken = token.refreshToken;
        return verify(refreshToken, process.env.APP_JWT_REFRESH!) as TokenPayload;
  }
}
