/**
 * Created by UC214475 on 11/14/2016.
 */
import '../../lib/main.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from '../ui/MainLayout.jsx';


Template.main.onRendered(function mainOnRender(){
   ReactDOM.render(<MainLayout/>,document.getElementById('target'));
});

