import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Actions
import {
  getUsers,
  clearErrors,
} from '../../../../redux/actions/userActions';
import { setAlert } from '../../../../redux/actions/alertActions';

// App layout components
import UserCard from './userCard';
// Components

import useStyles from './users-jss';

// Utils
import { WEBSITE_NAME } from '../../../../utils/Data';



const Users = (props) => {
  const classes = useStyles();

    const [user, setUser] = useState('');
  
  
    const {
      users,
      loading,
      error,
      getUsers,
      clearErrors,
      setAlert,
      
    } = props;
  
    useEffect(() => {
      getUsers();
  
      // eslint-disable-next-line
    }, []);
  
    useEffect(() => {
      if (error && error.length) {
        if (typeof error === 'object') {
          error.forEach((err) => {
            setAlert(err.msg, 'danger');
          });
        } else {
          setAlert(error, 'danger');
        }
  
        clearErrors();
      }
  
      // eslint-disable-next-line
    }, [error]);



    return (
      <>
        <Helmet>
          <title>{`${WEBSITE_NAME} | Users`}</title>
        </Helmet>
        <>
          <div className={`${classes.page} card-shadow text-center`}>
            <div className='messages mx-auto'>
                <h3 className='title'>All users</h3>
              {loading ? (
                <div className='cards-container mt-5'>
                  <UserCard isLoading={true} />
                  <UserCard isLoading={true} />
                </div>
              ) : !users || !users.length ? (
                <div className='empty'>
                  <h6 className='title mt-5'>
                    Empty inbox{' '}
                    <span role='img' aria-label='sad'>
                      😥
                    </span>
                  </h6>
                </div>
              ) : (
                <div className='container mt-5'>
                  {users.map((user) => (
                    <UserCard
                      key={user._id}
                      user={user}
                      
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

        </>
      </>
    );
  };
  
  const mapSateToProps = (state) => ({
    users: state.user.users,
    loading: state.user.loading,
    error: state.user.error,
  });
  
  export default connect(mapSateToProps, {
    getUsers,
    clearErrors,
    setAlert,
  })(Users);
  