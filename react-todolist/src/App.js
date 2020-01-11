import React from 'react';
import './App.css';
import todoList from './TodoList.js'
import Board from './Board.js'
import TodoForm from './TodoForm.js'


//didmountを明日
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentId : 0,
      todoList : todoList,
      todoItem : {
        id: '',
        title: '',
        deadline: '',
        importance: '',
        completedAt: '',
        isDone: false,
      }
    };
    this.deleteRow = this.deleteRow.bind(this);
    this.clearCompletedTask = this.clearCompletedTask.bind(this);
    this.checkAction = this.checkAction.bind(this);
    this.clearCompletedTask = this.clearCompletedTask.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.getDeadline = this.getDeadline.bind(this);
    this.getImportance = this.getImportance.bind(this);
    this.addTodoList = this.addTodoList.bind(this);

  }

  getTitle(event) {
    this.setState({
      todoItem : {
        title: event.target.value,
      }
    })
  }
  getDeadline(event) {
    this.setState({
      todoItem : {
        deadline: event.target.value,
      }
    })
  }
  getImportance(event) {
    this.setState({
      todoItem : {
        importance: event.target.value,
      }
    })
  }
  getCurrentId() {
    return this.state.currentId
  }
  addTodoList(event) {
    event.preventDefault()
    const todo =  {
      id: this.getCurrentId(),
      title: event.target.todo.value,
      deadline:  event.target.deadline.value,
      //importanceのvalueを取得できない
      //できた！
      importance:  event.target.importance.value,
      completedAt: '',
      isDone: false,
    }
    this.state.todoList.push(todo)
    this.setState(prevState => {
      return{
        currentId : prevState.currentId + 1,
        todoItem : {
          id: '',
          title: '',
          deadline: '',
          importance: '',
          completedAt: '',
          isDone: false,
        },
      }
    })
    console.log(this.state.todoList)
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
  componentDidUpdate() {
    localStorage.setItem('todoList',JSON.stringify(this.state.todoList))
  }
  componentDidMount() {
    this.setState({
        todoList: JSON.parse(localStorage.getItem('todoList'))
    })

  }
  render() {
    return(
      <div className="container container-form mt-5">
        <TodoForm
          todoItem = {this.state.todoItem}
          getTitle = {this.getTitle}
          getDeadline = {this.getDeadline}
          getImportance = {this.getImportance}
          addTodoList = {this.addTodoList}
        />
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
