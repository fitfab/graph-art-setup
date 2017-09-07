import user from './user';

export default [
    {
        id: 1,
        title: 'Here i go',
        text: 'This some copy for you to read again again.',
        views: 7,
        author: user
    },
    {
        id: 2,
        title: 'Never mind the sun!',
        text: 'Read this some copy for you to read again again.',
        views: 13,
        author: {
            id: 20012,
            firstName: 'Alberto',
            lastName: 'Lima',
            userName: 'woof',
            password: 'pass123'
        }
    },
]
