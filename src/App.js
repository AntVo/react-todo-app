import React, { Component } from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';
import TodoCounter from './TodoCounter';
import './App.css';

const todos = [
{
  task: 'Learn React',
  isCompleted: true
},
{
  task: 'Cook Dinner',
  isCompleted: false
}
];

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos, //ES6 syntax for todos: todos
      complete: 1,
      incomplete: 1,
    };
  }

  render() {
    return (
      <div className="app">
        <h1>React Todo App </h1>
        <CreateTodo createTask={this.createTask.bind(this)} />
        <TodoCounter complete={this.state.complete} incomplete={this.state.incomplete}/>
        <TodosList todos={this.state.todos} 
                   deleteTask={this.deleteTask.bind(this)}
                   toggleTask={this.toggleTask.bind(this)}
                   saveTask={this.saveTask.bind(this)}
        />
      </div>
    );
  }

  createTask(task){
    this.state.todos.push({
      task, // ES6 Syntax: task: task
      isComplete: false
    });
    this.state.incomplete++;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(task){
    const foundTodo = this.state.todos.find((todo) => todo.task === task);
    foundTodo.isCompleted ? this.state.complete-- : this.state.incomplete--;
    const newTodos = this.state.todos.filter((todo) => todo.task !== task);
    this.setState({ todos: newTodos });
  }

  toggleTask(task){
    console.log(task);
    const foundTodo = this.state.todos.find((todo) => todo.task === task);
    foundTodo.isCompleted ? (this.state.complete--, this.state.incomplete++) : (this.state.incomplete--, this.state.complete++);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask){
    const foundTodo = this.state.todos.find((todo) => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

}


