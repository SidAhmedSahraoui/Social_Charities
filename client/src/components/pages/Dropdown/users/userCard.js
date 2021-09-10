import React from 'react';
import { connect } from 'react-redux';
import useStyles from './users-jss';
// Utils
import calcDays from '../../../../utils/calcDays';
import { faUserCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteUser } from '../../../../redux/actions/userActions';
import { setAlert } from '../../../../redux/actions/alertActions';
const UserCard =({
  user ,
  deleteUser    
        }) => {


  const { 
    date,
    email,
    gender,
    post,
    username,
    _id,
  } = user || {};
 
  const classes = useStyles();

  const supprime =   (id) => {
    setAlert('Request deleted', 'danger');
     deleteUser(id);
};

  return (
    <div className={`${classes.page}`}>
<div className='card-shadow messageitem  text-left p-4'>
  <div className='card-inner  d-flex flex-column justify-content-between'>    
    <div className=' d-flex align-items-center justify-content-between'>
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

      <button className='button-primary' onClick={() => {supprime(_id);}}>
        Delete
      </button>
    </div>
  </div>
</div>
</div>
    
  );
};
const mapSateToProps = (state) => ({
users: state.user.users,
loading: state.user.loading,
error: state.user.error,
});

export default connect(mapSateToProps, {
deleteUser,
setAlert,
})(UserCard);