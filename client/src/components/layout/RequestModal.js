import React from 'react';
import { Modal } from 'react-bootstrap';

const RequestModal = (props) => {
  const { show, request, onHide } = props;

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Body className='text-center py-4'>
          <>
            <h5 className='title mb-3'>Request</h5>
            <span className='content'>
              {request}
            </span>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RequestModal;
