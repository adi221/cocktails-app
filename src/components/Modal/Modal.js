import React from 'react';
import './Modal.scss';
import { GrFormClose } from 'react-icons/gr';

const Modal = ({ closeModal, description }) => {
  return (
    <>
      <div className='overlay' onClick={closeModal}></div>
      <div className='modal'>
        <button onClick={closeModal}>
          <GrFormClose />
        </button>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Modal;
