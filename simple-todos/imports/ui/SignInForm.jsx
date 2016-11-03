import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SignUpButton from './SignUpButton.jsx';
import {FlowRouter} from 'meteor/kadira:flow-router';
export default class SignInForm extends Component{

  handleSubmit(event){
    event.preventDefault();
    let email = ReactDOM.findDOMNode(this.refs.username).value.trim();
    let pwd = ReactDOM.findDOMNode(this.refs.password).value.trim();

    Meteor.loginWithPassword(email,pwd,function(err){
      if(err){
        console.log(err.reason);
        return false;
      }
    });

  }

  render(){
    return (
      <div className="container">
          <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <form className="signInForm" onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group ">
                    <label htmlFor="email">Email:</label>
                    <input
                      id="email"
                      className="input-medium col-sm-offset-1"
                      type="email"
                      ref="username"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      className="input-medium"
                      type="password"
                      ref="password"
                      placeholder="Password"
                    />

                  </div>
                    <button type="submit" ref="regButton" className="btn">Login</button>
                </form>
              </div>
          <h3>
            Need to create and Account? <SignUpButton/>
          </h3>
        </div>
      </div>
    );
  }

}
