import React, { Component } from 'react';


//UNFINISHED 
export default class TodosCounter extends Component {
  render() {
    return (
      <div>
  		Complete: {this.props.complete}
  		<br></br>
  		Incomplete: {this.props.incomplete}
      </div>
    );
  }
}


