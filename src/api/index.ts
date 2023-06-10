// npm install @apollo/server express graphql cors body-parser
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer } from '@apollo/server';

// Pass this schema from nexus makeSchema to the Apollo Server 
import { schema } from './schema';

// Pass this contex which includes the Prima Client to the Apollo startStandalone Server
import { context } from './context';


// Required logic for integrating with Express
const app = express();

// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const main = async() => {
    // Ensure we wait for our server to start
    await server.start();
    
    const corsOptions = {
        credentials: true,
        origin: 'http://localhost:3000',
    };

    // Set up our Express middleware to handle CORS, body parsing,
    // and our expressMiddleware function.
    app.use(
      '/',
      cors(corsOptions),
      // 50mb is the limit that `startStandaloneServer` uses, but you may configure this to suit your needs
      bodyParser.json({ limit: '50mb' }),
      // expressMiddleware accepts the same arguments:
      // an Apollo Server instance and optional configuration options
      expressMiddleware(server, {
        context: async ({ req, res }) => {
            return (context({ req }, { res }))
        }
      }),
    );

    // Modified server startup
    await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/`);
}

main().catch((error) => {
    console.error(error);
});