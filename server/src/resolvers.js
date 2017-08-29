const channels =[
    {
        id: 100,
        name: 'players',
        topic: 'soccer',
        userCount: 5,
    },
    {
        id: 201,
        name: 'dancers',
        topic: 'tango',
        userCount: 2,
    }
];

export const resolvers = {
    Query: {
        channels: () => {
            return channels
        }
    }
}