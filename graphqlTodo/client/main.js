import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient(meteorClientConfig());

Meteor.startup(() => {
    FlowRouter.go("/");
});