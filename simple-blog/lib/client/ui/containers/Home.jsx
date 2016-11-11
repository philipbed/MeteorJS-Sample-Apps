import React ,{ Component } from 'react';

import LoginButton from '../components/LoginButton';
import SignUpButton from '../components/SignUpButton';

export default class Home extends Component{

    componentDidMount(){
        document.title = "Home";
    }

    render(){
        return (
          <div>
              <h1>Welcome to Bloggy Blog!</h1>
              <LoginButton/>
              <SignUpButton/>
          </div>
        );
    }
}