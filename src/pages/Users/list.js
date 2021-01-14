import Modal from "../../components/modalEdit"
import React, { Component } from "react"
export default class list extends Component {
  state = {
    modalShow: false,
  }
  toggleModal() {
    this.setState({ modalShow: !this.state.modalShow })
  }

  render() {
    // console.log("======render list", this.props);
    return (
      <li className="list-group-item  userTasksLi">
        <div className="list-item">
          <i className="fas fa-thumbtack"></i>
          <span>{this.props.title}</span>
        </div>

        <div className="list-item">
          <span>{this.props.time}</span>
        </div>

        <div className="list-item">
          <button onClick={this.toggleModal.bind(this)} type="button" className="btn btn-outline-warning">
            <i className="fas fa-edit"></i>
          </button>
          <button
            onClick={() => {
              this.props.deleteTask(this.props.id_user, this.props.id_task, this.props.id)
            }}
            type="button"
            className="btn btn-outline-danger">
            <i className="fas fa-trash-alt"></i>
          </button>
          {this.state.modalShow ? (
            <Modal
              id_user={this.props.id_user}
              id_task={this.props.id_task}
              title={this.props.title}
              value={this.props.value}
              editTask={this.props.editTask}
              changeTitlebyModal={this.props.changeTitlebyModal}
              toggleModal={this.toggleModal.bind(this)}
            />
          ) : null}
        </div>
      </li>
    )
  }
}

// export default function list({ nameTask, id }) {
//   const [modal, showModal] = useState(true);
//   function toggleModal() {
//     showModal(!modal);
//   }
//   return (
//     <li className="list-group-item  userTasksLi">
//       <div className="">
//         <i className="fas fa-thumbtack"></i>
//         <span>
//           {nameTask} {id}
//         </span>
//       </div>
//       <div>
//         <Modal nameTask={nameTask} />

//         <button
//           toggleModal={toggleModal}
//           type="button"
//           className="btn btn-outline-warning"
//         >
//           <i className="fas fa-edit"></i>
//         </button>

//         <button type="button" className="btn btn-outline-danger">
//           <i className="fas fa-trash-alt"></i>
//         </button>
//       </div>
//     </li>
//   );
// }
