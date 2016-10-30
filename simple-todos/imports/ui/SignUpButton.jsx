import React, {Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
export default class SignUpButton extends Component{
  handleClick(event){
    event.preventDefault();
    FlowRouter.go('/signUp');
  }
  render(){
    return(
      <button onClick={this.handleClick.bind(this)}>Sign Up Here</button>
    );
  }

}
