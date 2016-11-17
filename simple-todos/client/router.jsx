import React from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import ReactDOM from 'react-dom';
import AppLayout from '../imports/ui/AppLayout.jsx';
import MainLayout from '../imports/ui/MainLayout.jsx';
import App from '../imports/ui/App.jsx';
import SignUpForm from '../imports/ui/SignUpForm.jsx';
import SignInForm from '../imports/ui/SignInForm.jsx';

/**
 * The routes for corresponding react layouts.
 */
    FlowRouter.route('/', {
        name: 'home',
        action(){
            mount(AppLayout, {content: <MainLayout/>});
        }
    });

    FlowRouter.route('/signIn', {
        name: 'signIn',
        action(){
            mount(AppLayout,{content:<SignInForm/>} );
        }
    });

    FlowRouter.route('/signUp', {
        name: 'signUp',
        action(){
            mount(AppLayout,{content: <SignUpForm/>})
        }
    });

    FlowRouter.route('/app', {
        name: 'app',
        action(){
            mount(AppLayout,{content:<App/>} );
        }
    });


/**
 * Once the user is logged in redirect them to the '/app' route
 * @see: FlowFlowRouter.route('/app')
 */
Accounts.onLogin(function(){
    FlowRouter.go('/app');
});
