import React ,{ Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class LoginButton extends Component{
    render(){
        return <a onClick={FlowRouter.go('login')} className="btn btn-primary">Login</a> ;
    }
}