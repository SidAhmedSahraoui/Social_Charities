import React from 'react';

import useStyles from './Navbar/navbar-jss';
// Utils
import calcDays from '../../utils/calcDays';

const RequestCard =({ 
  approveRequest, 
  request, 
  declineRequest    }) => {


  const { id , email , name , category , offer , date } = request || {};
 
  const classes = useStyles();


  return (
    <div className={`${classes.navbar}`}>
<div className='message-card text-left p-4'>
  <div className='card-inner d-flex flex-column justify-content-between'>
    <p className='content mb-3'>
      {name}
    </p>
    <p className='content mb-3'>
      {email}
    </p>
    <p className='content mb-3'>
      <strong className='link-secondary'> category : </strong> {' '} {category}
    </p>

    <p className='content mb-3'>
       <strong className='link-secondary'> offer : </strong> {' '} {offer}
    </p>
    <p className='content mb-3'>
       <strong className='link-secondary'> acceptation : </strong> {' '} 
    </p>

    {/*<p className='content mb-3'>
      {category.length > 50 ? category.substring(0, 50) + '..' : category}
       </p> */}     
    <div className='card-bottom d-flex align-items-center justify-content-between'>
      <button className='button-primary' onClick={() => approveRequest}>
        Accept
      </button>
      <button className='button-primary' onClick={() => declineRequest}>
        Delete
      </button>

      <span className='date'>{calcDays(date)}</span>
    </div>
  </div>
</div>
</div>
    
  );
};

export default RequestCard;
