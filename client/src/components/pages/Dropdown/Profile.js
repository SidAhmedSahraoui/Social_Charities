import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Container } from 'react-bootstrap';

// Actions
import { loadUserProfile } from '../../../redux/actions/userActions';
import { setAlert } from '../../../redux/actions/alertActions';

// App layout components
import Spinner from '../../layout/Spinner';
import Dash from '../Admin/Dash'
// Utils
import { WEBSITE_NAME } from '../../../utils/Data';


const Profile = (props) => {
  const {
    match,
    user,
    user_profile,
    loading,
    error_send,
    loadUserProfile,
    clearErrors,
    setAlert,
  } = props;
  const { name, username, post } =
    user_profile || {};



  useEffect(() => {
    loadUserProfile(match.params.username);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    loadUserProfile(match.params.username);

    // eslint-disable-next-line
  }, [match]);

  useEffect(() => {
    if (error_send && error_send.length) {
      if (typeof error_send === 'object') {
        error_send.forEach((err) => {
          setAlert(err.msg, 'danger');
        });
      } else {
        setAlert(error_send, 'danger');
      }

      clearErrors();
    }

    // eslint-disable-next-line
  }, [error_send]);

 
 

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | ${
          loading ? 'Loading...' : username || 'Not found'
        }`}</title>
      </Helmet>
      <Container>
        <div className='container-inner px-3 mt-4 text-center'>
          {loading ? (
            <Spinner />
          ) :  !user || user._id === '612caa1f31cb9a33a0193de2' ? (
            <div>
              <Dash /> 
            </div>
          ) : (
            <div className='profile mx-auto'>
              

              <div className='user-details mt-4'>
                <h3 className='name'>{name || username}</h3>
                <p className='title'>
                  Position : { post }
                </p>
                
              </div>   
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

const mapSateToProps = (state) => ({
  user: state.auth.user,
  user_profile: state.user.user_profile,
  loading: state.user.loading,
});

export default connect(mapSateToProps, {
  loadUserProfile,
  setAlert,
})(Profile);
