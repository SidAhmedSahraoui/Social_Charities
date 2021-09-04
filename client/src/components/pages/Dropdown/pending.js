import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Container } from 'react-bootstrap';

// Actions
import {
  getRequests,
  clearErrors,
} from '../../../redux/actions/requestActions';
import { setAlert } from '../../../redux/actions/alertActions';

// App layout components
import MessageCard from '../../layout/MessageCard';
import MessageModal from '../../layout/MessageModal';

// Utils
import { WEBSITE_NAME } from '../../../utils/Data';



const Messages = (props) => {


  const [request, setRequest] = useState({
    name:'',
    email:'',
    category:'',
    offer:''
  });

 
  const {
    requests,
    loading,
    error,
    getRequests,
    clearErrors,
    setAlert,
  } = props;

  useEffect(() => {
    getRequests();

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
        <title>{`${WEBSITE_NAME} | Massages`}</title>
      </Helmet>
      <Container>
        <div className='container-inner px-3 mt-4 text-center'>
          <div className='messages mx-auto'>
            
            <div className='user-details mt-4'>
              <h3 className='title'>Your messages</h3>
              <h6 className='name'> hi </h6>
            </div>

            {loading ? (
              <div className='cards-container mt-5'>
                <MessageCard isLoading={true} />
                <MessageCard isLoading={true} />
              </div>
            ) : !requests || !requests.length ? (
              <div className='empty'>
                <h6 className='title mt-5'>
                  Empty inbox{' '}
                  <span role='img' aria-label='sad'>
                    😥
                  </span>
                </h6>
                <div className='share mt-5'>
                  <h6>Share your profile link with friends</h6>
                  <p className='mt-2'>
                    <code className='py-2 px-3'>
                      {`${window.location.origin.toString()}/u/${'admin'}`}
                    </code>
                  </p>
                </div>
              </div>
            ) : (
              <div className='cards-container mt-5'>
                {requests.map((request) => (
                  <MessageCard
                    key={request._id}
                    request={request}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <MessageModal
          request={request}
        />
      </Container>
    </>
  );
};

const mapSateToProps = (state) => ({
  user: state.auth.user,
  requests: state.request.requests,
  loading: state.request.loading,
  error: state.request.error,
});

export default connect(mapSateToProps, {
  getRequests,
  clearErrors,
  setAlert,
})(Messages);
