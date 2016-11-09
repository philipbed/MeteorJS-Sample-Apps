import { Accounts } from 'meteor/accounts-base';

// useful if using the accounts-ui setup. Not used in this application
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
