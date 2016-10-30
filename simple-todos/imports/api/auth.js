import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
import {FlowRouter} from 'meteor/kadira:flow-router';

Meteor.methods({
  'signUp'(email,pwd){
      Accounts.createUser({
        email:email,
        password:password,
      });

      FlowRouter.go('/app');
  },

  'signIn'(email,pwd){
    this.loginWithPassword({username:email},pwd);
  }
});
