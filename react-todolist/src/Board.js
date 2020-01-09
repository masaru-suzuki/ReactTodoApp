import React from 'react';
import Row from './Row'
function Board(props) {
  const todoList = props.todoList.map(todo => {
    return(
      <Row
        key = {todo.id}
        todo = {todo}
        deleteRow = {props.deleteRow}
      />
    )
  })
  return(

    <tbody>
      {todoList}
    </tbody>

  )
}
export default Board