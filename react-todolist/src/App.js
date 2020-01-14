import React from 'react'
//shortIdって何？
import shortId from 'shortid'
import './App.css'
import Board from './Board.js'
import TodoForm from './TodoForm.js'
import { getDefaultTodoItem } from './todo-list'

class App extends React.Component {
  state = {
    startDate: new Date(),
    sortByDeadlineBtn: true,
    sortByImportanceBtn: true,
    todoList: [],
    newTodo: getDefaultTodoItem(),
  }

  componentDidMount = () => this._initTodoList()

  handleChange = event => {
    console.log(event.target.name)
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        //このまとめ方できるようになりたい
        [event.target.name]: event.target.value,
      },
    })
  }

  addTodoList = event => {
    event.preventDefault()
    const newTodo = { ...this.state.newTodo, id: shortId(), createdAt: Date.now(), }
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

  sortByDeadline = () => {
    const newTodoList = [...this.state.todoList];
    const sortedTodoList = newTodoList.slice().sort((a, b) => {
      if(a.deadline < b.deadline){
        return -1;
    }else if(a.deadline > b.deadline){
        return 1;
    }
    return 0;
    })
    //createdAtをデータスタンプに直せば、 a.createdAt - b.createdAtと省略できる
    const originTodoList = newTodoList.slice().sort((a, b) => a.createdAt - b.createdAt)

    if (this.state.sortByDeadlineBtn === true) {
      this.setState({todoList: sortedTodoList, sortByDeadlineBtn: false})
    } else {
      this.setState({todoList: originTodoList, sortByDeadlineBtn: true})
    }
  }
  sortByImportance = () => {
    const newTodoList = [...this.state.todoList];
    const sortedTodoList = newTodoList.slice().sort(function(a, b) {
      const IMPORTANCE = ['高', '中', '低'];
      if(IMPORTANCE.indexOf(a.importance) < IMPORTANCE.indexOf(b.importance)){
        return -1;
    }else if(IMPORTANCE.indexOf(a.importance) > IMPORTANCE.indexOf(b.importance)){
        return 1;
    }
    return 0;
    })
    const originTodoList = newTodoList.slice().sort((a, b) => a.createdAt - b.createdAt)
    if (this.state.sortByImportanceBtn === true) {
      this.setState({todoList: sortedTodoList, sortByImportanceBtn: false})
    } else {
      this.setState({todoList: originTodoList, sortByImportanceBtn: true})
    }
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
          sortByDeadline = {this.sortByDeadline}
          sortByImportance = {this.sortByImportance}
        />
      </div>
    )
  }
//_をつけているのはなんで？=>privateの意味
  _initTodoList = () => {
    this.setState({ todoList: JSON.parse(localStorage.getItem('todoList')) || [] })
  }

  _updateTodoListAndLS = todoList => {
    //処理を,を使って並列に並べることもできる
    //なんでsetStateのなかでthis._syncLSをしたのか？
    this.setState({ todoList }, this._syncLS)
    console.log(todoList)
  }

  _syncLS = () => {
    localStorage.setItem('todoList', JSON.stringify(this.state.todoList))
  }

  _resetForm = () => this.setState({ newTodo: getDefaultTodoItem() })
}

export default App
