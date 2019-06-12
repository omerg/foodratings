const { GraphQLServer, GraphQLServerLambda } = require('graphql-yoga');

const Query = require('./resolvers/Query');
const Establishment = require('./resolvers/Establishment');
const Rating = require('./resolvers/Rating');
const Authority = require('./resolvers/Authority');
const SchemeType = require('./resolvers/SchemeType');
const BusinessType = require('./resolvers/BusinessType');

const resolvers = {
    Query,
    Authority,
    Establishment,
    Rating,
    SchemeType,
    BusinessType
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
});

const lambda = new GraphQLServerLambda({
    typeDefs: './src/schema.graphql',
    resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
exports.handler = lambda.handler;
