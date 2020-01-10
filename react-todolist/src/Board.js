import React from 'react';
import Row from './Row'
function Board(props) {
  const todoList = props.todoList.map(todo => {
    return(
      <Row
        key = {todo.id}
        todo = {todo}
        deleteRow = {props.deleteRow}
        checkAction = {props.checkAction}
      />
    )
  })
  return(
    <React.Fragment>
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
      <tbody>
        {todoList}
      </tbody>
    </table>
    <button id="clear-btn" className="clear-btn btn bg-secondary btn-sm" onClick={()=> {props.clearCompletedTask(props.todo)}}>all clear complete task</button>
    </React.Fragment>
  )
}
export default Board