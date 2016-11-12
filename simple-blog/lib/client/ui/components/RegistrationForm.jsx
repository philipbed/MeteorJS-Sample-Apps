import React, { Component } from 'react';

export default class RegistrationForm extends Component{

    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit( this.refs.email, this.refs.username, this.refs.password );
    }

    cancel(e){
        this.props.onCancel(e);
    }

    render(){
        return(
            <div>
                <form>
                    <div className="form-group" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="row">
                            <label className="col-sm-2 control-label">Email Address:</label>
                            <div className="col-sm-2">
                                <input
                                    className="form-control"
                                    placeholder="Enter Email Address"
                                    type="email"
                                    ref="email"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <label className="col-sm-2 control-label">Username:</label>
                            <div className="col-sm-2">
                                <input
                                    className="form-control"
                                    placeholder="Enter Desired Username"
                                    type="text"
                                    ref="username"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <label className="col-sm-2 control-label">Password:</label>
                            <div className="col-sm-2">
                                <input
                                    className="form-control"
                                    placeholder="Enter Desired Password"
                                    type="password"
                                    ref="password"
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                        <a onClick={this.cancel.bind(this)} className="btn btn-danger col-sm-offset-1">Cancel</a>
                    </div>
                </form>
            </div>
        );
    }
}