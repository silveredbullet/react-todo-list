import React, { Component } from 'react';
import TodoForm from'./components/todo/todoForm.js';
import TodoList from'./components/todo/todoList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['wash dishes', 'cook breakfast', 'laundry']
    }
  }
  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <TodoForm />
        <TodoList todo_data={this.state.todos} />

      </div>
    );
  }
}

export default App;
