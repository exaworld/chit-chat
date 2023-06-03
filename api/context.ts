import { PrismaClient } from '@prisma/client';
import { IncomingMessage } from 'http';
import { AuthProvider } from '../utils/authProvider';

export const db = new PrismaClient();
export const auth = new AuthProvider();

export interface Context {
    db: PrismaClient;
    auth: AuthProvider;
}

// This is passed to apollo server
export const context = ({ req }: {req: IncomingMessage }): Context => {
    return {
        db,
        auth,
    };
};
