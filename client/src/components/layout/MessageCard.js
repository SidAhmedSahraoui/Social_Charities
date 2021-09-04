import React from 'react';

import Skeleton from 'react-loading-skeleton';

// Utils
import calcDays from '../../utils/calcDays';

const MessageCard = ({
  request,
  isLoading,
}) => {
  const { name , email , category , offer } = request;

 

  if (isLoading)
    return (
      <div className='message-card text-left p-4'>
        <div className='card-inner d-flex flex-column justify-content-between'>
          <p className='content mb-3'>
            <Skeleton count={2} height={10} />
          </p>

          <div className='card-bottom d-flex align-items-center justify-content-between'>
            <button className='link-secondary'>
              <Skeleton count={1} height={24} width={120} />
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className='message-card text-left p-4'>
      
      <div className='card-inner d-flex flex-column justify-content-between'>
        <p className='content mb-3'>
          {name + ' ' + email + ' ' + category +' ' + offer }
        </p>

        <div className='card-bottom d-flex align-items-center justify-content-between'>
          <button className='link-secondary'>
            View message
          </button>
          <span className='date'>{calcDays(Date.now())}</span>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;