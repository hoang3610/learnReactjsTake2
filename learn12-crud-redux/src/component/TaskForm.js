import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class TaskForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: '',
      name: '',
      status: false
    }
  }
  UNSAFE_componentWillMount() {
		if(this.props.itemEditing && this.props.itemEditing.id !== null) {
			this.setState({
				id: this.props.itemEditing.id,
				name: this.props.itemEditing.name,
				status: this.props.itemEditing.status
			});
		}else {
      this.resetState()
    }
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if(nextProps && nextProps.itemEditing) {
			this.setState({
				id: nextProps.itemEditing.id,
				name: nextProps.itemEditing.name,
				status: nextProps.itemEditing.status
			});
		} else   {
			this.onClear();
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
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.onClear();
    this.onCloseForm();
  }
  resetState = () => {
		this.setState({
			id: "",
			name: "",
			status: false
		})
	}
  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
    // this.onCloseForm()
  }
  render() {
    if(!this.props.isDisplayForm) return null;
    return (
      <div class="panel panel-warning">
        <div class="panel-heading">
          <h3 class="panel-title">
          { this.state.id ? 'Cap Nhat Cong Viec' : 'Them Cong Viec'}
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
                Luu
              </button>
              &nbsp;
              <button type="button" 
               onClick={this.resetState}
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

const mapStateToProps = (state) => {
  return {
    isDisplayForm : state.isDisplayForm,
    itemEditing : state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask : (task) => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm : () => {
      dispatch(actions.closeForm())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
