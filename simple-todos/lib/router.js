import React from 'react';
//
import ReactDOM from 'react-dom';
import MainLayout from '../imports/ui/MainLayout.jsx';
import App from '../imports/ui/App.jsx';
import SignUpForm from '../imports/ui/SignUpForm.jsx';
import SignInForm from '../imports/ui/SignInForm.jsx';

/**
 * The routes for corresponding react layouts.
 */

Router.route('/',function(){
    ReactDOM.render(<MainLayout/>,document.getElementById('app'));
});

Router.route('/signIn',{
    name: 'signIn',
    action(){
        ReactDOM.render(<SignInForm />,document.getElementById('app'));
    }
});

Router.route('/signUp',{
   name: 'signUp',
    action(){
       ReactDOM.render(<SignUpForm/>,document.getElementById('app'));
    }
});

Router.route('/app',{
    name:'app',
    action(){
        ReactDOM.render(<App />,document.getElementById('app'));
    }
});



/**
 * Once the user is logged in redirect them to the '/app' route
 * @see: Flowrouter.route('/app')
 */
Accounts.onLogin(function(){
    Router.go('/app');
});
