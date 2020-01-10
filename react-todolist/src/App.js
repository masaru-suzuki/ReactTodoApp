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
    this.clearCompletedTask = this.clearCompletedTask.bind(this);
    this.checkAction = this.checkAction.bind(this);
  }
  //check入れたらisDone=>false,completedAtにcheckした日付を入れる、行をグレーにする
  checkAction(todo) {
    //toggle checkbox
    this.setState(prevState => {
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
        <form name="form" id="js-form">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">todo</label>
            <div className="col-sm-10">
              <input name="todo" id="todo" className="form-control" type="text" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">daedline</label>
            <div className="col-sm-4 form-group">
              <div className="input-group date" id="datetimepicker4" data-target-input="nearest">
                <input
                  name="deadline"
                  id="deadline"
                  type="text"
                  className="form-control datetimepicker-input"
                  data-target="#datetimepicker4"
                />
                <div className="input-group-append" data-target="#datetimepicker4" data-toggle="datetimepicker">
                  <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-2 col-form-label">importance</label>
            <div className="col-10 mt-2">
              <label><input type="radio" name="importance" value="high" />高</label>
              <label><input type="radio" name="importance" className="ml-5" value="middle" />中</label>
              <label><input type="radio" name="importance" className="ml-5" value="low" />低</label>
            </div>
          </div>
          <button type="submit" className="btn btn-block bg-secondary" id="btn">Add to List</button>
        </form>
        <table className="table mt-5">
          <thead>
            <tr>
              <th>check</th>
              <th>todo</th>
              <th id="sort-deadline">deadline<i className="fas fa-sort"></i></th>
              <th id="sort-importance">importance <i className="fas fa-sort"></i></th>
              <th>Completion date</th>
              <th>Delete button</th>
            </tr>
          </thead>
          <Board 
            todoList = {this.state.todoList}
            deleteRow = {this.deleteRow}
            checkAction = {this.checkAction}
          />
        </table>
        <button id="clear-btn" className="clear-btn btn bg-secondary btn-sm" onClick={this.clearCompletedTask}>all clear complete task</button>
      </div>
    )
  }
}

//======================================================
export default App;
