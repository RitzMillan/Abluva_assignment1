import React from "react";
import ReactDom from "react-dom";
import './Modal.scss'

function Modal({ isOpen, setIsOpen, override }) {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <p>
          The content in this Version and the content on the Editor are
          different
          <br />
          Do you want to Override the content of Editor ?
        </p>
        <button onClick={()=> setIsOpen(false)}>Cancle</button>
        <button onClick={()=> {setIsOpen(false); override()}}>Override</button>
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default Modal;
