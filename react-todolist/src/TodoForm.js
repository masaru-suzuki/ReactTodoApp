import React from 'react';
function TodoForm(props) {
  //{id: 0, title: '風呂掃除', deadline: '2020-01-20', importance: '高',completedAt: '', isDone: false}の形で、情報を取得
  //formにonSubmitでaddTodoListを作る
  //かくinputのvalueの更新ができない  => onChange={ e => this.setState({selectedValue: e.target.value}) }>
  //Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
  return(
    <form name="form" id="js-form" onSubmit={props.addTodoList} >
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">todo</label>
        <div className="col-sm-10">
          <input name="title" id="todo" value={props.todoItem.title} onChange={props.handleChange}className="form-control" type="text" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">daedline</label>
        <div className="col-sm-4 form-group">
          <div className="input-group date" id="datetimepicker4" data-target-input="nearest">
            <input name="deadline" id="deadline" placeholder="2020-01-20" value={props.todoItem.deadline} onChange={props.handleChange} className="form-control datetimepicker-input" data-target="#datetimepicker4"/>
            <div className="input-group-append" data-target="#datetimepicker4" data-toggle="datetimepicker">
              <div className="input-group-text"><i className="fa fa-calendar"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-2 col-form-label">importance</label>
        <div className="col-10 mt-2">
          <label><input type="radio" name="importance" value="高" checked={props.todoItem.importance === '高'} onChange={props.handleChange}/>高</label>
          <label><input type="radio" name="importance" value="中" checked={props.todoItem.importance === '中'} onChange={props.handleChange} className="ml-5"/>中</label>
          <label><input type="radio" name="importance" value="低" checked={props.todoItem.importance === '低'} onChange={props.handleChange} className="ml-5"/>低</label>
        </div>
      </div>
      <button type="submit" className="btn btn-block bg-secondary" id="btn">Add to List</button>
    </form>
  )
}

export default TodoForm