export const typeDefs = `
  type User {
    id: Int
    name: String
    posts(limit: Int): [Post]
  }

  type Post {
    id: Int
    title: String
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
	type channels {
        channels: [Channel]
    }

  type Query {
    author(id: Int): User
    topPosts(limit: Int): [Post]
		channels(limit: Int): [Channel]
		channel: Channel
  }
`;
