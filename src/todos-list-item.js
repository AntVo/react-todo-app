import React, { Component } from 'react';

export default class TodosListItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderTasksSection(){
    const { task, isCompleted } = this.props;
    const taskStyle = {
      cursor: 'pointer',
      color: isCompleted ? 'green' : 'red'
    };

    if (this.state.isEditing){
      return (
        <td> 
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input className="isEditingForm" type='text' defaultValue={task} ref='editInput'></input>
          </form>
        </td>
      );
    }

    return (
      <td style={taskStyle}
          onClick={this.props.toggleTask.bind(this, task)}     
      >
        {task}
      </td>
    );
  }

  renderActionSection(){
    if (this.state.isEditing){
        return (
          <td>
            <button className="save-button" onClick={this.onSaveClick.bind(this)}>Save</button>
            <button className="cancel-button" onClick={this.onCancelClick.bind(this)}>Cancel</button>
          </td>
        );
    }

    return (
      <td>
        <button className="edit-button" onClick={this.onEditClick.bind(this)}>Edit</button>
        <button className="delete-button" onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
      </td>
    );
  
  }

  render(){
    return (
        <div className="todo-item">
            {this.renderTasksSection()}
            {this.renderActionSection()}
        </div>
    );
  }

  onEditClick(){
    this.setState({ isEditing: true });
  }

  onCancelClick(){
    this.setState({ isEditing: false});
  }

  onSaveClick(event){
    event.preventDefault();
    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }

}


