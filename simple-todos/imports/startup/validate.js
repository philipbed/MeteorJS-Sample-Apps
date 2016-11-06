import { Accounts } from 'meteor/accounts-base';

Accounts.validateLoginAttempt(function validate(option){
  console.log("Validating..."+option.allowed);
  return option.allowed;
});
