import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
    };
  }
  onChange = (event) => {
    event.preventDefault();
    var target = event.target;
    var name = target.name;
    var value = target.value;
    var filter = {
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? value : this.state.filterStatus,
    };
    this.props.onFilterTable(filter);
    this.setState({
      [name]: value,
    });
  };
  render() {
    var { tasks, filterTable, keyword, sort } = this.props;
    /* filter Table */
    if (filterTable) {
      if (filterTable.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filterTable.name) !== -1;
        });
      }
      tasks = tasks.filter((task) => {
        if (filterTable.status === -1) {
          return task;
        } else {
          return task.status === (filterTable.status === 1 ? true : false);
        }
      });
    }
    /* search keyword */
    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    /* sort by, value */
    if (sort.by === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sort.value;
        else if (a.name < b.name) return -sort.value;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return sort.value;
        else if (a.status < b.status) return -sort.value;
        else return 0;
      });
    }
    var elementTask = tasks.map((task, index) => {
      return <TaskItem key={task.id} index={index} task={task} />;
    });
    return (
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th class="text-center">STT</th>
            <th class="text-center">Tên</th>
            <th class="text-center">Trạng Thái</th>
            <th class="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                class="form-control"
                name="filterName"
                value={filterTable.name}
                onChange={this.onChange}
              />
            </td>
            <td>
              <select
                name="filterStatus"
                class="form-control"
                value={filterTable.status}
                onChange={this.onChange}
              >
                <option value="-1">Tất Cả</option>
                <option value="0">Ẩn</option>
                <option value="1">Kích Hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
            {/* taskItem */}
            {elementTask}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filterTable: state.filterTable,
    keyword: state.search,
    sort: state.sort,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTable: (filter) => {
      dispatch(actions.filterTask(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
