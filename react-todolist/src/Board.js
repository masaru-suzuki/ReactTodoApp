import React from 'react';
import Row from './Row'
function Board(props) {
  const todoList = props.todoList.map(todo => {
    return(
      <Row
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
export default Board