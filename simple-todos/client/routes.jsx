import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import {MainLayout} from '../imports/ui/MainLayout.jsx';
import App from '../imports/ui/App.jsx';

FlowRouter.route('/', {

  action(){
    mount(MainLayout);
    }

});

FlowRouter.route('/app',{

  action(){
    mount(App);
  }

});
