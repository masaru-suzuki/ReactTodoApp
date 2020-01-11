import React from 'react'
import './App.css'
import { initialTodoList, getDefaultTodoItem } from './TodoList.js'
import Board from './Board.js'
import TodoForm from './TodoForm.js'

class App extends React.Component {
  currentId = 0
  state = {
    todoList: initialTodoList,
    todoItem: {
      id: '',
      title: '',
      deadline: '',
      importance: '',
      completedAt: '',
      isDone: false,
    },
    newTodo: getDefaultTodoItem(),
  }

  handleChange = event =>
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        [event.target.name]: event.target.value,
      },
    })

  addTodoList = event => {
    event.preventDefault()
    const newTodo = { id: this.currentId, ...this.state.newTodo }
    this.setState({ todoList: [...this.state.todoList, newTodo] })
    this._resetForm()
    this._incrementId()
  }

  checkAction = index => {
    const newTodoList = [...this.state.todoList]
    const targetTodo = this.state.todoList[index]
    const updatedTarget = {
      ...targetTodo,
      isDone: !targetTodo.isDone,
      completedAt: targetTodo.isDone ? '' : new Date().toLocaleDateString(),
    }
    newTodoList[index] = updatedTarget
    this.setState({ todoList: newTodoList })
  }

  clearCompletedTask = () => {
    this.setState({ todoList: this.state.todoList.filter(({ isDone }) => !isDone) })
  }

  deleteRow = index =>
    this.setState({ todoList: this.state.todoList.filter((_, i) => i !== index) })

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

  _incrementId = () => this.currentId++
  _resetForm = () => this.setState({ newTodo: getDefaultTodoItem() })
}

export default App
