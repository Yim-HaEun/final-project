import React from 'react';
import '../css/Profile.css';

function Modal(props) {
  function closeModal() {
    props.closeModal();
  }

  return (
    <div className="Modal" onClick={closeModal}>
      <div
        className="modalBody"
        onClick={(e) => e.stopPropagation()}
        style={{ overflowY: 'auto' }}
      >
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
