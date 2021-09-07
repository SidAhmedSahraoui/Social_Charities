import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Actions
import {
  getRequests,
  toggleFav,
  clearErrors,
} from '../../../redux/actions/requestActions';
import { setAlert } from '../../../redux/actions/alertActions';

// App layout components
import RequestCard from '../../layout/RequestCard';
import RequestModal from '../../layout/RequestModal';

// Utils
import { WEBSITE_NAME } from '../../../utils/Data';



const Requests = (props) => {


    const [showModal, setShowModal] = useState(false);
    const [request, setRequest] = useState('');
  
    const handleShowModal = (msg) => {
      setRequest(msg);
      setShowModal(true);
    };
  
    const handleHideModal = () => {
      setShowModal(false);
      setRequest('');
    };
  
    const {
      requests,
      loading,
      error,
      getRequests,
      toggleFav,
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
          <title>{`${WEBSITE_NAME} | Pending`}</title>
        </Helmet>
        <>
          <div className='container-inner text-center'>
            <div className='messages mx-auto'>
             
              <div className='user-details mt-4'>
                <h3 className='title'>All requests</h3>
              </div>
  
              {loading ? (
                <div className='cards-container mt-5'>
                  <RequestCard isLoading={true} />
                  <RequestCard isLoading={true} />
                </div>
              ) : !requests || !requests.length ? (
                <div className='empty'>
                  <h6 className='title mt-5'>
                    Empty inbox{' '}
                    <span role='img' aria-label='sad'>
                      😥
                    </span>
                  </h6>
                </div>
              ) : (
                <div className='cards-container mt-5'>
                  {requests.map((request) => (
                    <RequestCard
                      key={request._id}
                      request={request}
                      toggleFavAction={toggleFav}
                      handleShowModal={handleShowModal}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
  
          <RequestModal
            key={request._id}
            show={showModal}
            request={request}
            onHide={handleHideModal}
          />
        </>
      </>
    );
  };
  
  const mapSateToProps = (state) => ({
    requests: state.request.requests,
    loading: state.request.loading,
    error: state.request.error,
  });
  
  export default connect(mapSateToProps, {
    getRequests,
    toggleFav,
    clearErrors,
    setAlert,
  })(Requests);
  