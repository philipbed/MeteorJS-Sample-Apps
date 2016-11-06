import React, {Component} from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import SignInButton from './SignInButton.jsx';

export class MainLayout extends Component{
  constructor(props){
    super(props);
    console.log("constructor");
    document.title = "Home";
  }

  goToApp(){
    FlowRouter.go('/app')
  }
  render(){
    return (
      <div className="text-center">
        <h1>This is the Home page</h1>
        {/* <button  onClick={this.goToApp.bind(this)}>App</button> */}
        <br/>
        <SignInButton/>
      </div>
    );

  }

};
