import casual from 'casual-browserify';

const activities = ['soccer', 'tennis', 'tango', 'dominos','artnet']

export default [
    {
        id: casual.integer(100,900),
        name: casual.random_element(activities),
        topic: casual.state,
        userCount: 5,
    },
    {
        id: casual.integer(100,900),
        name: casual.random_element(activities),
        topic: casual.state,
        userCount: 2,
    }
];
