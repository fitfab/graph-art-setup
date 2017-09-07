import casual from 'casual-browserify';
import user from './user';

export default [
    {
        id: casual.integer(100,900),
        title: casual.title,
        text: casual.text,
        views: casual.integer(2,11),
        author: user
    },
    {
        id: casual.integer(100,900),
        title: casual.title,
        text: casual.text,
        views: casual.integer(2,11),
        author: user
    },
    {
        id: casual.integer(100,900),
        title: casual.title,
        text: casual.text,
        views: casual.integer(2,11),
        author: user
    },
]
