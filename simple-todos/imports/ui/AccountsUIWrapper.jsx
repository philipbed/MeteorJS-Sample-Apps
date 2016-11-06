import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsUIWrapper extends Component {

  getEmail(){
    if (Meteor.user()){
      console.log("here");
      return Meteor.user().emails[0].address;
    }
    else{
      return "Not Logged in";
    }
  }

  logout(){
    Meteor.logout(function(){
       FlowRouter.go('/');
    });
  }

  render() {
    // Just render a placeholder container that will be filled in
    return (<div>
              <span ref="container">{this.getEmail()}</span>
              <button className="logout-button" onClick={this.logout.bind(this)}>Logout</button>
            </div>);
  }
}
