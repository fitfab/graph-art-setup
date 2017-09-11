import casual from 'casual-browserify';
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
    },
    Mutation: {
        addChannel: (root, args) => {
            const newChannel = {
                id: channels.length+1,
                name: args.name,
                topic: casual.random_element(['Dancing Queen', 'iPhone', 'iSaid', 'iDance', 'iWhatever']),
                userCount: 0,
            };
            channels.push(newChannel);
            return newChannel;
        }
    }
}
