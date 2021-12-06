import schemas from './src/schemas/schemas';
const stringConnection = require('./src/database/database');
import express from 'express';
const { connection } = require('mongoose');
const app = express();
const { expressGraphQLMiddleware } = require('./src/middleware/express-graphQL-middleware');
const logger = require('./src/middleware/core/logger');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/schemas/schemas').typeDefinitions;
const { root } = require('./src/root/root');
const extensions = ({context}) => {
    return {
        runtime: Date.now() - context.startTime,
    }
};

app.use(logger);
app.use(expressGraphQLMiddleware);

app.get('/', (request, response) => {
    response.json({
        message: "Hello World!"
    });
})

app.use('/graphql', graphqlHTTP({
    context: { startTime: Date.now() },
    schema: schemas,
    graphiql: true,
    extensions
}));

app.listen(8000, async () => {
    console.log(" Running in PORT 8000");
    await stringConnection;
});

connection.on(
    "error",
    console.log.bind(console, "Mongo Database conection error")
);