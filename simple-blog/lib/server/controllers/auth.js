import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
import {FlowRouter} from 'meteor/kadira:flow-router';



Meteor.methods({

    'register'( email, username, pwd ){
        check(email,String);
        check(username,String);
        check(password,String);

        Accounts.createUser({
            email:email,
            username:username,
            password:pwd,
        });

    },


});