import React from 'react';
import Row from './Row';
function Board(props) {
  const todoList = props.todoList.map((todo, i) => {
    return(
      <Row
        key = {todo.id}
        index={i}
        todo = {todo}
        deleteRow = {props.deleteRow}
        checkAction = {props.checkAction}
      />
    )
  });
  return(
    <>
      <table className="table mt-5">
      <thead>
        <tr>
          <th>check</th>
          <th>todo</th>
          <th id="sort-deadline" onClick={props.sortByDeadline}>deadline<i className="fas fa-sort"></i></th>
          <th id="sort-importance" onClick={props.sortByImportance}>importance <i className="fas fa-sort"></i></th>
          <th>Completion date</th>
          <th>Delete button</th>
        </tr>
      </thead>
      <tbody>
        {todoList}
      </tbody>
    </table>
    <button id="clear-btn" className="clear-btn btn bg-secondary btn-sm" onClick={()=> {props.clearCompletedTask(props.index)}}>all clear complete task</button>
    </>
  )
}
export default Board