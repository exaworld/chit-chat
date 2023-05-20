import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Pass this schema from nexus makeSchema to the Apollo Server 
import { schema } from './schema';

// Pass this contex which includes the Prima Client to the Apollo startStandalone Server
import { context } from './context';

async function startApolloServer() {
    const server = new ApolloServer({ schema });

    const { url } = await startStandaloneServer(server, {
    context: async({ req }) => context({ req }) //context must be of type function
    });

    console.log(`Server is running at ${url}`)
}

startApolloServer();
