import React, {Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';

export default class SignInButton extends Component{
  handleClick(event){
    event.preventDefault();
    FlowRouter.go('/signIn');
  }
  render(){
    return(
      <button className="btn primary-button bump-left" onClick={this.handleClick.bind(this)}>Sign In Here</button>
      );
    }

}
