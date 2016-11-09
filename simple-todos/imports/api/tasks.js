import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

// This code block only gets run if this file is imported/ran on the server.
if(Meteor.isServer){
  Meteor.publish('tasks', function publishTasks(){
    return Tasks.find();
  });
}


// Start meteor methods - like controllers
Meteor.methods({
    /**
     * Insert a task document into the Task collection
     * @param text - The text of the new task
     */
      'tasks.insert'(text){

        // Throw an error if the user is not logged in
        if(! this.userId){
          throw new Meteor.Error("not-authorized");
        }
        // Validate that text is a string
        check(text, String);
        // Insert a new task
        Tasks.insert({
          text,
          createdAt: new Date(),
          owner: this.userId,
          username: Meteor.users.findOne(this.userId).username,
        });
      },

    /**
     * Remove a task document from the Tasks collection
     * @param taskId - the ID of the Task to remove
     */
      'tasks.remove' (taskId) {
        check(taskId,String);
        Tasks.remove(taskId);

      },

    /**
     * Set the checked attribute of a task
     * @param taskId - the ID of the Task
     * @param setChecked - a boolean that represents completion
     */
    'tasks.setChecked' ( taskId, setChecked ){
        check(taskId, String);
        check(setChecked,Boolean);

        // use the $set keyword(MongoDB keyword) because it allows the document
        // to be updated with that new field and not have the entire document
        // replaced with a document with a new field.
        Tasks.update(taskId, { $set : {checked: setChecked } } );
      },

    /**
     * Edit the text of an existing task
     * @param taskId - The ID of the task
     * @param newText - The updated text
     */
    'tasks.edit'(taskId,newText){
        check(taskId,String);

        Tasks.update( taskId, {$set: { text: newText } } );
      },

});
