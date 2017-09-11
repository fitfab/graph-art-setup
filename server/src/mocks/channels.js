import casual from 'casual-browserify';

const activities = ['soccer', 'tennis', 'tango', 'dominos','artnet']

export default [
    {
        id: casual.integer(100,900),
        name: casual.random_element(activities),
        topic: casual.state,
        userCount: casual.integer(1,100),
    },
    {
        id: casual.integer(100,900),
        name: casual.random_element(activities),
        topic: casual.state,
        userCount: casual.integer(1,900),
    },
    {
        id: casual.integer(100,900),
        name: casual.random_element(activities),
        topic: casual.state,
        userCount: casual.integer(2,100),
    },
    {
        id: casual.integer(100,900),
        name: casual.random_element(activities),
        topic: casual.state,
        userCount: casual.integer(10,100),
    },
];
