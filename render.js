import React, {Component} from 'react'
import './style.css'

// class App extends React.Component {
//   render() {
//     return(
//       <h1>aaa</h1>
//     )
//   }
// }

// ReactDOM.render(
//     <App/>,
//     document.getElementById('aaaa'),
// )

const todoList = [
  {id: 0, title: '風呂掃除', deadline: '2020-01-20', importance: '高', isDone: false},
  {id: 1, title: '床掃除', deadline: '2020-01-25', importance: '中', isDone: false},
  {id: 2, title: 'トイレ掃除', deadline: '2020-01-10', importance: '低', isDone: true},
]
//========================Row============================================
function List(props) {
  return(
    <tr>
      <td><input type="checkbox" className="checkbox"/></td>
      <td>{props.todo.title}</td>
      <td>{props.todo.deadline}</td>
      <td>{props.todo.importance}</td>
      <td>{props.todo.completedAt}</td>
      <td><a href="#" className="btn btn-secondary btn-sm delete">X</a></td>
      </tr>
  )
}

//========================Board==========================================
function Board(props) {
  const todoList = props.todoList.map(todo => {
    return(
      <List
        key = {todo.id}
        todo = {todo}
      />
    )
  })
  return(
    <React.Fragment>
      {todoList}
    </React.Fragment>
  )
}
//========================App=============================================
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

ReactDOM.render(
    <App/>,
    document.getElementById('task-list')
)

