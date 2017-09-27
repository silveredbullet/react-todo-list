import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  addTodo() {
    console.log('Clicked')
  }

  updateText(event) {
    console.log('updateText')
    console.log(event.target.value)
    this.setState({
      text: event.target.value
    })
  }


  render() {
    return (
      <div>
        <input
        onChange={(event) => this.updateText(event)}
        value={this.state.text}
        />
        <button onClick={() => this.addTodo()}>Add Todo</button>
      </div>
    )
  }
}

export default TodoForm;
