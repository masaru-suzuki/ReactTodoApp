import React from 'react'
import shortId from 'shortid'
import './App.css'
import Board from './Board.js'
import TodoForm from './TodoForm.js'
import { getDefaultTodoItem } from './todo-list'

class App extends React.Component {
  state = {
    todoList: [],
    newTodo: getDefaultTodoItem(),
  }

  componentDidMount = () => this._initTodoList()

  handleChange = event =>
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        [event.target.name]: event.target.value,
      },
    })

  addTodoList = event => {
    event.preventDefault()
    const newTodo = { ...this.state.newTodo, id: shortId() }
    this._updateTodoListAndLS([...this.state.todoList, newTodo])
    this._resetForm()
  }

  checkAction = index => {
    const newTodoList = [...this.state.todoList]
    const targetTodo = this.state.todoList[index]
    const updatedTodo = {
      ...targetTodo,
      isDone: !targetTodo.isDone,
      completedAt: targetTodo.isDone ? '' : new Date().toLocaleDateString(),
    }
    newTodoList[index] = updatedTodo
    this._updateTodoListAndLS(newTodoList)
  }

  clearCompletedTask = () => {
    this._updateTodoListAndLS(this.state.todoList.filter(({ isDone }) => !isDone))
  }

  deleteRow = index => this._updateTodoListAndLS(this.state.todoList.filter((_, i) => i !== index))

  render() {
    return (
      <div className="container container-form mt-5">
        <TodoForm
          handleChange={this.handleChange}
          todoItem={this.state.newTodo}
          getTitle={this.getTitle}
          getDeadline={this.getDeadline}
          getImportance={this.getImportance}
          addTodoList={this.addTodoList}
        />
        <Board
          todoList={this.state.todoList}
          deleteRow={this.deleteRow}
          checkAction={this.checkAction}
          clearCompletedTask={this.clearCompletedTask}
        />
      </div>
    )
  }

  _initTodoList = () => {
    this.setState({ todoList: JSON.parse(localStorage.getItem('todoList')) || [] })
  }

  _updateTodoListAndLS = todoList => {
    this.setState({ todoList }, this._syncLS)
  }

  _syncLS = () => {
    localStorage.setItem('todoList', JSON.stringify(this.state.todoList))
  }

  _resetForm = () => this.setState({ newTodo: getDefaultTodoItem() })
}

export default App
