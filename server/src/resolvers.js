import user from './mocks/user';
import channels from './mocks/channels';
import posts from './mocks/posts';

console.log(channels.length);

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
    },
    Mutation: {
        addChannel: (root, args) => {
            const newChannel = {
                id: channels.length+1,
                name: args.name,
                topic: args.topic,
            };
            channels.push(newChannel);
            return newChannel;
        }
    }
}
