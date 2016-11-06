import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppLayout from '../imports/ui/layouts/AppLayout.jsx';
import HomePage from '../imports/ui/components/HomePage.jsx';
FlowRouter.route("/",{
   action(){
       mount(AppLayout,{content:<HomePage/>})
   }
});