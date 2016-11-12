import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import Home from '../ui/containers/Home.jsx';
import Register from '../ui/containers/Register';

FlowRouter.route('/',{
    name: 'home',
    action(){

        mount(Home);

    }

});

FlowRouter.route('/login',{
    name: 'login',
    action(){
        // mount();
    }
});

FlowRouter.route('/register',{
    name: 'register',
    action(){
        mount(Register);
    }
});