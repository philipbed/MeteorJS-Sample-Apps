import React ,{ Component } from 'react';

import RegistrationForm from '../components/RegistrationForm.jsx';

export default class Home extends Component{

    componentDidMount(){
        document.title = "Home";
    }

    handleSubmit(email,user,password){
        event.preventDefault();
        Meteor.call('register',email,user,password);
    }

    cancel(){
        FlowRouter.go('home');
    }

    render(){
        return (
            <div>
                <h1>Register Here!</h1>
                <RegistrationForm onSubmit={this.handleSubmit} onCancel={this.cancel}/>
            </div>
        );
    }
}