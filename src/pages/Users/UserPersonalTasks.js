import React from "react";
import List from "./list";
export default class UserPersonalTasks extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {}

  render() {
    console.log("==============UserPersonalTasks render user tasks");
    let RenderUserTask;
    let user;
    if (Object.keys(this.props.users).length) {
      user = this.props.users.find((user) => {
        return user.id_user === parseInt(this.props.history.match.params.id);
      });

      RenderUserTask = user.tasks.map((task, i) => {
        return (
          <List
            key={i}
            id={i}
            id_user={parseInt(this.props.history.match.params.id)}
            id_task={task.id_task}
            value={this.props.valueTodo}
            title={task.title}
            time={task.time_task}
            editTask={this.props.editTask}
            changeTitlebyModal={this.props.changeTitlebyModal}
            deleteTask={this.props.deleteTask}

            // showModal={item.showModal}
          />
        );
      });
    }

    return (
      <div>
        <div className="alert alert-primary" role="alert">
          {RenderUserTask === undefined ? (
            <h1>at firs add user</h1>
          ) : (
            <>
              <h1>{user.user_name}</h1>

              <p>add tasks {user.tasks.length}</p>
            </>
          )}
        </div>

        <div className="input-group col-lg-6">
          <input
            value={this.props.valueUser}
            onKeyUp={(e) => {
              this.props.keyHandle(
                e,
                parseInt(this.props.history.match.params.id),
                user.tasks.length
              );
            }}
            onChange={(e) => {
              this.props.changeTitleUserTask(e.target.value);
            }}
            type="text"
            className="form-control"
          />

          <div className="input-group-append">
            <button
              onClick={() => {
                this.props.addTodoTaskUser(
                  parseInt(this.props.history.match.params.id),
                  user.tasks.length
                );
              }}
              disabled={Object.keys(this.props.users).length === 0}
              className="btn btn-secondary"
              type="button"
            >
              add task
            </button>
          </div>
        </div>
        <div>
          <ul className="list-group list-group-flush">{RenderUserTask} </ul>
          {/* {user.tasks.length === 0 ? <p>добавьте user</p> : null} */}
        </div>
      </div>
    );
  }
}
