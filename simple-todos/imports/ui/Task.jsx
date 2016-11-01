import React, { Component, PropTypes } from 'react';
import { Tasks } from '../api/tasks.js';
// Task component - represents a single todo item
export default class Task extends Component {
    constructor(props){
      super(props);
      this.state = {editable:false, text:props.task.text};
    }

    taskItem() {
      const taskClassName = this.props.task.checked ? "checked": "";
      return ( <li className={taskClassName}>
                <div className="wrapper">
                  <button className="edit" onClick={ this.toggleEdit.bind( this ) }>&#9998;</button>
                  <button className="delete" onClick={ this.deleteTask.bind( this) }>&times;</button>
                </div>
                <input
                  type="checkbox"
                  readOnly
                  checked={this.props.task.checked}
                  onClick={this.toggleChecked.bind(this)} />

                <span className="text">{Meteor.users.findOne(Meteor.userId()).emails[0].address}</span> : {this.props.task.text}
              </li>);
    }

    makeTaskeditable(){
      const taskClassName = this.props.task.checked ? "checked": "";
      return (<li className={taskClassName}>

          <input onChange={this.handleChange.bind(this)} type="text" className="text" value={this.state.text}/>
          <button role="submit" className="save" onClick={ this.editTask.bind(this) }>Submit</button>

          <button role="button" className="cancel" onClick={ this.toggleEdit.bind(this) }>Cancel</button>
        </li>);
    }

    handleChange(event){
      this.setState({text:event.target.value});
    }


   toggleChecked() {
      Meteor.call('tasks.setChecked', this.props.task._id,!this.props.task.checked)

  }

  deleteTask(){
    Meteor.call('tasks.remove',this.props.task._id);

  }

  toggleEdit(event){
    event.preventDefault();
    this.setState({editable:!this.state.editable});
  }

  editTask(event){
    event.preventDefault();
    let text = $(".text").val().trim();
    Meteor.call('tasks.edit',this.props.task._id, text,function( err, res ){
      if(err){
        console.log(err.reason);
      }
    });

    this.toggleEdit(event);
  }

  render() {
    let component;
    if(this.state.editable){
      component = this.makeTaskeditable();
    }
    else{
      component = this.taskItem();
    }
    return component;

  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
