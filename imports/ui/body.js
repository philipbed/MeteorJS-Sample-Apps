import { Template } from 'meteor/templating';
import { Tasks } from '../models/tasks.js';
import './body.html';


// not the way it's done in th tutorial
Template.task.helpers({
  tasks() {
    return Tasks.find({});
  }
})
