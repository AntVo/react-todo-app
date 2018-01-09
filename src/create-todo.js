import React, { Component } from 'react';

export default class CreateTodo extends Component {
	constructor(props){
	    	super(props)
	    	this.state = {
	    		error: null
	    	};
	    }

	renderError(){
	    	if (!this.state.error){ return null; }
	    	return <div style={{color: 'red'}}>{this.state.error}</div>
	}

  	render(){
	    return (
	    	<div className="create-todo">
		        <form onSubmit={this.handleCreate.bind(this)}>
		          <input type="text" placeholder="What do I need to do?" ref="createInput"></input>
		          <button>Create</button>
		          {this.renderError()}
		        </form>
		    </div>
	    )
	}

    handleCreate(event){
    	event.preventDefault();

    	const createInput = this.refs.createInput;
    	const task = createInput.value;
    	const validateInput = this.validateInput(task);
    	if (validateInput){
    		this.setState({ error: validateInput });
    		return;
    	}

    	this.setState({ error: null});
    	this.props.createTask(task);
    	this.refs.createInput.value = '';
    }


    validateInput(task){
    	if (!task){
    		return 'Please enter a task.';
    	} 
    	else {
    		return null;
    	}
    }

}


