import React from 'react'
import Pickadate from 'pickadate/builds/react-dom'

function TodoForm(props) {
  return (
    <form name="form" id="js-form" onSubmit={props.addTodoList}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">todo</label>
        <div className="col-sm-10">
          <input
            name="title"
            id="todo"
            value={props.todoItem.title}
            onChange={props.handleChange}
            className="form-control"
            type="text"
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">daedline</label>
        <div className="App ml-3">
          <Pickadate.InputPicker
            onChangeValue={({ value, date }) => {
              props.setDeadline(value,date)
            }}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-2 col-form-label">importance</label>
        <div className="col-10 mt-2">
          <label>
            <input
              type="radio"
              name="importance"
              value="高"
              checked={props.todoItem.importance === '高'}
              onChange={props.handleChange}
            />
            高
          </label>
          <label>
            <input
              type="radio"
              name="importance"
              value="中"
              checked={props.todoItem.importance === '中'}
              onChange={props.handleChange}
              className="ml-5"
            />
            中
          </label>
          <label>
            <input
              type="radio"
              name="importance"
              value="低"
              checked={props.todoItem.importance === '低'}
              onChange={props.handleChange}
              className="ml-5"
            />
            低
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-block bg-secondary" id="btn">
        Add to List
      </button>
    </form>
  )
}
export default TodoForm

