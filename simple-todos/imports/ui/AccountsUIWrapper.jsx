import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

/**
 * React Component for the AccountsUI display. Customized it for my own use
 */

export default class AccountsUIWrapper extends Component {
    /**
     * Retrieve the current user's email address.
     * @returns {String} - The user's email address or not Logged in if the user isn't
     *             logged in.
     */
    getEmail(){
        if (Meteor.user()){
            console.log("here");
            return Meteor.user().emails[0].address;
        }
        else{
            return "Not Logged in";
        }
    }

    /**
     * Logout method for the button. Route to the home route on success.
     */
    logout(){
        Meteor.logout(function(){
            FlowRouter.go('/');
        });
    }

    /**
     * Renders the component
     * @returns {JSX}
     */
    render() {
        // render the email and the logout button
        return (<div>
                  <span ref="container">{this.getEmail()}</span>
                  <button className="logout-button" onClick={this.logout.bind(this)}>Logout</button>
                </div>);
    }
}
