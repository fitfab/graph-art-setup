import user from './mocks/user';
import channels from './mocks/channels';
import posts from './mocks/posts';

export const resolvers = {
    Query: {
        channels: () => {
            return channels
        },
        author: () => {
            return user
        },
        recentPosts: () => {
            return posts
        }
    }
}
