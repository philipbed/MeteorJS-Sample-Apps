import React, { Component } from 'react';

export default class SignUpButton extends Component{
    handleClick(){
        FlowRouter.go('register');
    }

    render(){
        return <a onClick={this.handleClick.bind(this)} className="btn btn-primary">Sign Up</a> ;
    }
}