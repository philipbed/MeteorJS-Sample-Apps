import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class SignUpForm extends Component{

  handleSubmit(event){
    event.preventDefault();
    let email = ReactDOM.findDOMNode(this.refs.username).value.trim();
    let pwd = ReactDOM.findDOMNode(this.refs.password).value.trim();
    Meteor.call('signUp',email,pwd);
  }
  render(){
    return (
      <div>
        <form className="signUpForm" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            ref="username"
            placeholder="Username"
          /><br/>
          <input
            type="text"
            ref="password"
            placeholder="Password"
          /><br/>
          <input
            type="submit"
            ref="regButton"
            value="Register"
          />
        </form>
      </div>
    );
  }

}
