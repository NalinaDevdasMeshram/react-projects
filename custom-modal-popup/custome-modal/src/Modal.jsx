import React from "react";

const modal = ({ id, header, footer, body, onClose }) => {
  return (
    <div id={id || "modal"} className="modalName">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ? header : "header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>this our modal body</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>footer</h2>}</div>
      </div>
    </div>
  );
};

export default modal;
