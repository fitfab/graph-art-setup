import express from 'express';

const PORT = 4000;
const server = express();

server.get('/', (req, res) => {
    res.send('hello world!')
})

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));