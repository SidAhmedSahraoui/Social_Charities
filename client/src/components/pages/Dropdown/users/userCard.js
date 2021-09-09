import React from 'react';

import useStyles from './users-jss';
// Utils
import calcDays from '../../../../utils/calcDays';
import { faUserCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserCard =({
  user 
      
        }) => {


  const { 
    allow_messages ,
    date,
    email,
    gender,
    name,
    password,
    post,
    role_id,
    username,
    _id,
  } = user || {};
 
  const classes = useStyles();


  return (
    <div className={`${classes.page}`}>
<div className='card-shadow text-left p-4'>
  <div className='card-inner d-flex flex-column justify-content-between'>    
    <div className='messageitem d-flex align-items-center justify-content-between'>
    <div>
        <FontAwesomeIcon className='icon' icon={faUserCircle} />
    </div>
    <p className='title mb-3'>
      {email}
    </p>
    <p className='title mb-3'>
      {username}
    </p>
    <p className='title mb-3'>
      {post}
    </p>

    <span className='date'>{calcDays(date)}</span>

      <button className='button-primary'>
        Delete
      </button>

    </div>
  </div>
</div>
</div>
    
  );
};

export default UserCard;