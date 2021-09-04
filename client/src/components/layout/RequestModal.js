import React from 'react';
import { Modal } from 'react-bootstrap';

const RequestModal = (props) => {
  const { show, name , email , category , offer , onHide } = props;

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Body className='text-center py-4'>
          <>
            <h5 className='title mb-3'>Request</h5>
            <span className='content'>
              <h1>{name}</h1>
              <h1>{email} </h1>
              <h1>{category} </h1>
              <h1>{offer} </h1>
            </span>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RequestModal;
