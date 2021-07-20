import React, { Component } from "react";
import {connect} from 'react-redux'
import * as actions from './../actions/index'


class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id)
  }
  onDelete = () => {
    this.props.onDeleteTask(this.props.task.id)
    this.props.onCloseForm();
  }
  onUpdate = () => {
    this.props.onEditTask(this.props.task);
    this.props.onOpenForm();
  }
  render() {
    var { task, index } = this.props
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td class="text-center">
          <span class={task.status === true? 'label label-danger':'label label-success'}
          onClick={this.onUpdateStatus}>{task.status === true ? 'Kích Hoạt' : 'Ẩn'}</span>
        </td>
        <td class="text-center">
          <button 
            type="button" 
            class="btn btn-warning"
            onClick={this.onUpdate}
            >
            <span class="fa fa-pencil mr-5"></span>Sửa
          </button>
          &nbsp;
          <button 
            type="button" 
            class="btn btn-danger"
            onClick={this.onDelete}>
            <span class="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus : (id) => {
      dispatch(actions.updateStatus(id))
    },
    onDeleteTask : (id) => {
      dispatch(actions.deleteTask(id))
    },
    onCloseForm : () => {
      dispatch(actions.closeForm())
    },
    onOpenForm : () => {
      dispatch(actions.openForm())
    },
    onEditTask : (task) => {
      dispatch(actions.editTask(task))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
