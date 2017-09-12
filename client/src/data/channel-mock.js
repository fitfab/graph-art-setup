import casual from 'casual-browserify';

export const mocks = {
    Channel: () => ({
        name: () => casual.title,
        userCount: () => casual.integer(500, 900),
        topic: () => casual.safe_color_name
    })
};
