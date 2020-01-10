import React from 'react';

function Row(props) {
  return(
    <tr id={props.todo.id}>
      <td><input type="checkbox" className="checkbox" onChange={()=>{{props.checkAction(props.todo)}}}/></td>
      <td>{props.todo.title}</td>
      <td>{props.todo.deadline}</td>
      <td>{props.todo.importance}</td>
      <td>{props.todo.completedAt}</td>
      <td><a href="#" className="btn btn-secondary btn-sm delete" onClick={() => props.deleteRow(props.todo)}>X</a></td>
      </tr>
  )
}

export default Row