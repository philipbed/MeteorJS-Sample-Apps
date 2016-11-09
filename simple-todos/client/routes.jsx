import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import {MainLayout} from '../imports/ui/MainLayout.jsx';
import App from '../imports/ui/App.jsx';
import SignUpForm from '../imports/ui/SignUpForm.jsx';
import SignInForm from '../imports/ui/SignInForm.jsx';

/**
 * The routes for corresponding react layouts.
 */

FlowRouter.route('/', {


  action(){
    mount(MainLayout);
    }

});

FlowRouter.route('/signUp',{

  action(){
    mount(SignUpForm);
  }

});

FlowRouter.route('/signIn',{
  action(){
    mount(SignInForm);
  }
});

FlowRouter.route('/app',{

  action(){
    mount(App);
  }

});

/**
 * Once the user is logged in redirect them to the '/app' route
 * @see: Flowrouter.route('/app')
 */
Accounts.onLogin(function(){
   FlowRouter.go('/app');
});
