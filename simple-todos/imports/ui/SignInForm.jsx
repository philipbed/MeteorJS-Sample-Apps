import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SignUpButton from './SignUpButton.jsx';
import {FlowRouter} from 'meteor/kadira:flow-router';
export default class SignInForm extends Component{

  handleSubmit(event){
    event.preventDefault();
    let email = ReactDOM.findDOMNode(this.refs.username).value.trim();
    let pwd = ReactDOM.findDOMNode(this.refs.password).value.trim();
    console.log("here");
    Meteor.loginWithPassword(email,pwd,function(err){
      if(!err){
        FlowRouter.go('/app');
      }
      else{
        console.log("error");
        throw new Meteor.Error("Invalid login: "+err);
        return false;
      }
    });

  }

  render(){
    return (
      <div>
        <form className="signInForm" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            ref="username"
            placeholder="Username"
          /><br/>
          <input
            type="password"
            ref="password"
            placeholder="Password"
          /><br/>
          <input
            type="submit"
            ref="regButton"
            value="Login"
          />
        </form>

        <h3>
          Need to create and Account? <SignUpButton/>
        </h3>
      </div>
    );
  }

}
