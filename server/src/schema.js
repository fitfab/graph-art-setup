import {
    makeExecutableSchema,
    addMockFunctionsToSchema
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
    type User {
        id: Int!
        firstName: String
        lastName: String
        userName: String
        password: String
        posts(limit: Int): [Post]
    }

    type Post {
        id: Int
        title: String
        text: String
        views: Int
        author: User
    }

    type Channel {
        id: ID!
        name: String!
        topic: String!
        userCount: Int
        users: [User]
    }

    type Query {
        author(id: Int): User
        recentPosts(limit: Int): [Post]
        channels(limit: Int): [Channel]
    }

    # The mutation root type, use to define all mutations
    type Mutation {
        addChannel(name: String!, topic: String!): Channel
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
//addMockFunctionsToSchema({ schema });
export { schema };
