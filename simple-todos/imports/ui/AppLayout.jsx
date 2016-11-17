import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React, { Component } from 'react';

import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';

import { ApolloProvider } from 'react-apollo';
const client = new ApolloClient(meteorClientConfig());


export default class AppLayout extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const {content} = this.props;
        return (
            <div>
                <ApolloProvider client={client}>
                    {content}
                </ApolloProvider>
            </div>
        );
    }
}
