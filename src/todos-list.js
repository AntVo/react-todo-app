import React, { Component } from 'react';
import TodosListItem from './todos-list-item';

export default class TodosList extends Component {

  renderItems(){
    return this.props.todos.map((todo, index) => 
      <TodosListItem key={index} 
                     {...todo} 
                     deleteTask={this.props.deleteTask}
                     toggleTask={this.props.toggleTask}
                     saveTask={this.props.saveTask}
      />);
    // ES6 Spreading: {...todo} -> task={todo.task} isCompleted={todo.isCompleted} etc
  }

  render() {
    return (
      <table>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}


