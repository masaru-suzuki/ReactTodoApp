import React from 'react';

function Row(props) {
  return(
    <tr className={props.todo.isDone ? 'checked' : ''}>
      <td><input type="checkbox" className="checkbox" checked={props.todo.isDone} onChange={()=>{{props.checkAction(props.index)}}}/></td>
      <td>{props.todo.title}</td>
      <td>{props.todo.deadline}</td>
      <td>{props.todo.importance}</td>
      <td>{props.todo.completedAt}</td>
      <td><a href="#" className="btn btn-secondary btn-sm delete" onClick={() => props.deleteRow(props.index)}>X</a></td>
      </tr>
  )
}

export default Row