export const typeDefs = `

    # defines what type object exist in our app
    type Channel {
        id: ID!
        name: String
    }

    # Defines what we can query within our API
    type Query {
        channels: [Channel]
    }
`;