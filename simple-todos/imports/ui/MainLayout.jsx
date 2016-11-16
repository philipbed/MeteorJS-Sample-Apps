import React, {Component} from 'react';

import SignInButton from './SignInButton.jsx';

export default class MainLayout extends Component{
  constructor(props){
    super(props);
    console.log("constructor");
    document.title = "Home";
  }

  
  render(){
    return (
      <div className="text-center">
        <h1>This is the Home page</h1>

        <br/>
        <SignInButton/>
      </div>
    );

  }

}
