import { PrismaClient } from '@prisma/client';
import { IncomingMessage } from 'http';

export const db = new PrismaClient();

export interface Context {
    db: PrismaClient;
}

// This is passed to apollo server
export const context = ({ req }: {req: IncomingMessage }): Context => {
    return {
        db
    };
};
