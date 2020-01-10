import React from 'react';
function TodoForm() {
  return(
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
  )
}

export default TodoForm