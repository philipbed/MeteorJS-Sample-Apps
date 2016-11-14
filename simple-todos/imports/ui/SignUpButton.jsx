import React, {Component} from 'react';

export default class SignUpButton extends Component{
  handleClick(event){
    event.preventDefault();
    Router.go('/signUp');
  }
  render(){
    return(
      <button id="signUp" className="btn secondary-button bump-left" onClick={this.handleClick.bind(this)}>Sign Up Here</button>
    );
  }

}
