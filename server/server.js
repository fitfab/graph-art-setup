import {
    graphqlExpress,
    graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import express from 'express';

import { schema } from './src/schema';


const PORT = (process.env.PORT || PORT);
const server = express();

server.use('/graphql', bodyParser.json(), graphqlExpress({
    schema
}));

server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));
server.set('port', PORT)
server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${server.get('port')}`));
