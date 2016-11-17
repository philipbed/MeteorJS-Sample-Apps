import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';
import '../imports/api/auth.js';
import '../imports/startup/validate.js';
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import { typeDefs, resolvers } from '../imports/api/schema';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({
    schema,
});

Meteor.startup(() => {
  // code to run on server at startup
});
