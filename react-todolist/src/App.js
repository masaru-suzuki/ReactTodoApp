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
    this.deleteRow = this.deleteRow.bind(this);
  }
  deleteRow (todo) {
    this.setState(prevState => {
      const todoList = prevState.todoList.map(todo => {
        return(
          {id: todo.id, title: todo.title, deadline: todo.deadline, importance: todo.importance,completedAt: todo.completedAt, isDone: todo.isDone}
        )
      })
      const position = prevState.todoList.map(todo => {
        return todo.id
      }).indexOf(todo.id)
      console.log(position)
      delete todoList[position];

      return{
        todoList: todoList
      }
    })
  }
  render() {
    return(
      <Board
        todoList = {this.state.todoList}
        deleteRow = {this.deleteRow}
      />
    )
  }
}

//======================================================
export default App;
