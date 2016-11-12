import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
import {FlowRouter} from 'meteor/kadira:flow-router';

// Add methods to be called from Meteor.

Meteor.methods({

    /**
     *  Adds a user account with their email and password in the db.
     *  @param email - The user's email address
     *  @param pwd - The user's desired password
     */
  'signUp'(email,pwd){
      console.log("signing up");
      Accounts.createUser({
        email:email,
        password:pwd,
      });

  },

});
