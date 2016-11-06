import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default class SignUpForm extends Component{

  handleSubmit(event){
    event.preventDefault();
    let email = ReactDOM.findDOMNode(this.refs.username).value.trim();
    let pwd = ReactDOM.findDOMNode(this.refs.password).value.trim();
    let userObject = {
      email: email,
      password: pwd
    };

    Accounts.createUser(userObject,function(err){
      if(err){
        console.log(err.reason);
      }
      else{
        FlowRouter.go('/app');
      }
    });

    // FlowRouter.go('/app');
  }
  render(){
    return (
      <div className="text-center">
        <form className="signUpForm" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            ref="username"
            className="input-sm"
            placeholder="Username"
          /><br/>
          <input
            type="text"
            ref="password"
            className="input-sm"
            placeholder="Password"
          /><br/>
          <button
            type="submit"
            ref="regButton"
            className="btn primary-button"
          >
              Register
          </button>
          <a
            href="/"
            className="btn cancel-button"
          >
          Cancel
          </a>
        </form>
      </div>
    );
  }

}
