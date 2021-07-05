import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id : '',
      name: '',
      status: false
    }
  }
  UNSAFE_componentWillMount() {
		if(this.props.task) {
			this.setState({
				id: this.props.task.id,
				name: this.props.task.name,
				status: this.props.task.status
			});
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if(nextProps && nextProps.task) {
			this.setState({
				id: nextProps.task.id,
				name: nextProps.task.name,
				status: nextProps.task.status
			});
		} else if(!nextProps.task) {
			this.setState({
				id: '',
				name: '',
				status: false
			})
		}
	}
  onCloseForm = () => {
    this.props.onCloseForm()
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === "status"){
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name] : value
    })
  }
  onSubmit = (event) => {
    // event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  }
  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
    this.onCloseForm()
  }
  render() {
    var {id} = this.state
    return (
      <div class="panel panel-warning">
        <div class="panel-heading">
          <h3 class="panel-title">
          { id !== '' ? 'Cap Nhat Cong Viec' : 'Them Cong Viec'}
            <span 
              className="fa fa-times-circle text-right"
              onClick={this.onCloseForm}
            ></span>
          </h3>
        </div>
        <div class="panel-body">
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label>Tên :</label>
              <input 
                type="text" class="form-control" 
                name="name"
                value= {this.state.name}
                onChange={this.onChange}
                />
            </div>
            <label>Trạng Thái :</label>
            <select class="form-control" required="required" name="status" 
              value= {this.state.status}
              onChange={this.onChange}>
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div class="text-center">
              <button type="submit" 
                class="btn btn-warning">
                Thêm
              </button>
              &nbsp;
              <button type="button" 
               onClick={this.onClear}
               class="btn btn-danger">
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
