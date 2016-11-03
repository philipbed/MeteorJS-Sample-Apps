import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';


const client = new ApolloClient(meteorClientConfig());

export default class AppLayout extends Component{
    render(){
        return(
            <ApolloProvider client={client}>
                {this.props.content}
            </ApolloProvider>
        );
    }
}