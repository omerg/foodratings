const { GraphQLServer, GraphQLServerLambda } = require('graphql-yoga');

const Query = require('../src/resolvers/Query');
const Establishment = require('../src/resolvers/Establishment');
const Rating = require('../src/resolvers/Rating');
const Authority = require('../src/resolvers/Authority');
const SchemeType = require('../src/resolvers/SchemeType');
const BusinessType = require('../src/resolvers/BusinessType');

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
