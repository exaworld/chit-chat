import { PrismaClient } from '@prisma/client';
import { IncomingMessage, OutgoingMessage } from 'http';
import { AuthProvider, TokenPayload } from '../../utils/authProvider';
import { parseCookie } from '../Utils/cookies';

export const db = new PrismaClient();
export const auth = new AuthProvider();

export interface Context {
    db: PrismaClient;
    auth: AuthProvider;
    authenticate: any;
    res: any //for setting res.cookie
}

// This is passed to apollo server
export const context = ({ req }: {req: IncomingMessage }, { res }: {res: OutgoingMessage } ): Context => {
    const cookies = req.headers.cookie ? req.headers.cookie : '';
    const parsedCookies = parseCookie(cookies);
    const refreshToken = parsedCookies?.refreshToken;
    const accessToken = parsedCookies?.accessToken;

    return {
        db,
        auth,
        authenticate: () => { return auth.verifyToken({ accessToken, refreshToken }) },
        res
    };
};
