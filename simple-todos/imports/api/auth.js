import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
import {FlowRouter} from 'meteor/kadira:flow-router';

Meteor.methods({
  'signUp'(email,pwd){
      console.log("signing up");
      Accounts.createUser({
        email:email,
        password:pwd,
      });

  },

});
