import casual from 'casual-browserify';

export default {
    id: casual.integer(100,900),
    firstName: casual.first_name,
    lastName: casual.last_name,
    userName: casual.username,
    password: casual.password
}
