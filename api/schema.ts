import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from './graphql';

export const schema = makeSchema({
    //GraphQL types that will be used to construct the GraphQL schema.
    types,
    outputs: {
        //Output path to where nexus should write the generated TypeScript definition types derived from the schema. This is mandatory to benefit from Nexus' type-safety.
        typegen: join(__dirname, 'generated/nexus.ts'),
        // Output path to where nexus should write the SDL (schema definition language) version of the GraphQL schema.
        schema: join(__dirname, 'generated/schema.graphql')
    },
    contextType: {
        // Path to the module where the context type is exported
        module: join(process.cwd(), "./api/context.ts"),
        // Name of the export in that module
        export: 'Context',
    },
})
