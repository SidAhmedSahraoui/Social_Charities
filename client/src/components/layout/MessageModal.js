import React from 'react';
import { Modal } from 'react-bootstrap';

const MessageModal = (props) => {
  const { request } = props;

  return (
    <>
      <Modal centered>
        <Modal.Body className='text-center py-4'>
          <>
            <h5 className='title mb-3'>request</h5>
            <span className='content'>{request}</span>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MessageModal;