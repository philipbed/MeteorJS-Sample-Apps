import { Accounts } from 'meteor/accounts-base';

// Not really any meaningful use in this app. Was testing out custom login and login validation.
Accounts.validateLoginAttempt(function validate(option){
  console.log("Validating..."+option.allowed);
  return option.allowed;
});
