import React from 'react';
import './App.css';
import todoList from './TodoList.js'
import Board from './Board.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList : todoList
    }
  }
  render() {
    return(
      <Board
        todoList = {this.state.todoList}
      />
    )
  }
}

//======================================================
export default App;
