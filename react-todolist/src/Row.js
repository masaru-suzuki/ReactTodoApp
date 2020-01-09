import React from 'react';

function Row(props) {
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

export default Row