import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import {MainLayout} from '../imports/ui/MainLayout.jsx';
import App from '../imports/ui/App.jsx';
import SignUpForm from '../imports/ui/SignUpForm.jsx';
import SignInForm from '../imports/ui/SignInForm.jsx';

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

Accounts.onLogin(function(){
   FlowRouter.go('/app');
});
