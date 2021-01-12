import React from "react";

export default function modalEdit({
  title,
  toggleModal,
  changeTitlebyModal,
  value,
  editTask,
  id_user,
  id_task,
}) {
 // console.log("=======render modal");
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" onClick={toggleModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input
              value={value}
              onChange={(e) => {
                changeTitlebyModal(e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="modal-footer">
            <button
              onClick={toggleModal}
              type="button"
              className="btn btn-secondary"
            >
              Close
            </button>
            <button
              onClick={() => {
                editTask(id_user, id_task);
              }}
              type="button"
              className="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
