import React from 'react';
import './App.css';
import todoList from './TodoList.js'
import Board from './Board.js'
import TodoForm from './TodoForm.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList : todoList
    }
    this.deleteRow = this.deleteRow.bind(this);
    this.clearCompletedTask = this.clearCompletedTask.bind(this);
    this.checkAction = this.checkAction.bind(this);
    this.clearCompletedTask = this.clearCompletedTask.bind(this);
  }

  checkAction(todo) {
    this.setState(prevState => {
      //Toggle checkbox
      const todoList = prevState.todoList.map(todo => {
        return(
          {id: todo.id, title: todo.title, deadline: todo.deadline, importance: todo.importance,completedAt: todo.completedAt, isDone: todo.isDone}
        )
      })
      const position = prevState.todoList.map(todo => {
        return todo.id
      }).indexOf(todo.id)
      todoList[position].isDone = !todoList[position].isDone
      console.log(todoList[position].isDone)

      //Show completed date
      todoList[position].isDone?todoList[position].completedAt = new Date().toLocaleDateString():todoList[position].completedAt = ''
      //Fill checked Row
      const target = document.getElementById(todoList[position].id)
      todoList[position].isDone?target.classList.add('checked'):target.classList.remove('checked')

      return{
        todoList: todoList
      }
    })
  }
  clearCompletedTask() {
    this.setState(prevState => {
      const todoList = prevState.todoList.filter(todo => {
        return !todo.isDone
      })
      return{
        todoList : todoList
      }
    })
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
      <div className="container container-form mt-5">
        <TodoForm/>
        <Board
          todoList = {this.state.todoList}
          deleteRow = {this.deleteRow}
          checkAction = {this.checkAction}
          clearCompletedTask = {this.clearCompletedTask}
        />
      </div>

    )
  }
}

//======================================================
export default App;
