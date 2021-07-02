import React, { Component } from "react";

class TaskItem extends Component {
  onUpdateStatus = () => {
  console.log(this.props.task.id)
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
          <button type="button" class="btn btn-warning">
            <span class="fa fa-pencil mr-5"></span>Sửa
          </button>
          &nbsp;
          <button type="button" class="btn btn-danger">
            <span class="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    );

  }
}

export default TaskItem;


// onUpdateStatus = () => {
//   console.log(this.props.task.id)
// }
// var { task, index } = this.props
//     return (
//       <tr>
//         <td>{index + 1}</td>
//         <td>{task.name}</td>
//         <td class="text-center">
//           <span class={task.status === true? 'label label-danger':'label label-success'}
//           onClick={this.onUpdateStatus}>{task.status === true ? 'Kích Hoạt' : 'Ẩn'}</span>
//         </td>
//         <td class="text-center">
//           <button type="button" class="btn btn-warning">
//             <span class="fa fa-pencil mr-5"></span>Sửa
//           </button>
//           &nbsp;
//           <button type="button" class="btn btn-danger">
//             <span class="fa fa-trash mr-5"></span>Xóa
//           </button>
//         </td>
//       </tr>
//     );

    //   var { task, index } = this.props
//     return (
//       <tr>
//         <td>1</td>
//         <td>Hoc lap trinh</td>
//         <td class="text-center">
//           <span class='label label-danger'>Kich hoat</span>
//         </td>
//         <td class="text-center">
//           <button type="button" class="btn btn-warning">
//             <span class="fa fa-pencil mr-5"></span>Sửa
//           </button>
//           &nbsp;
//           <button type="button" class="btn btn-danger">
//             <span class="fa fa-trash mr-5"></span>Xóa
//           </button>
//         </td>
//       </tr>
//     );
//   }
// }