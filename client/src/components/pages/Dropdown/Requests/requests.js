<<<<<<< HEAD:client/src/components/pages/Dropdown/Requests/requests.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
=======
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
>>>>>>> bc5e177f7ced2e754838bb22b2f61064d176fd3c:client/src/components/pages/Dropdown/requests.js

// Actions
import {
  getRequests,
 /* approveRequest,
  deleteRequest,*/
  clearErrors,
<<<<<<< HEAD:client/src/components/pages/Dropdown/Requests/requests.js
} from '../../../../redux/actions/requestActions';
import { setAlert } from '../../../../redux/actions/alertActions';

// App layout components
import RequestCard from './RequestCard';
// Components

import useStyles from './pending-jss';

// Utils
import { WEBSITE_NAME } from '../../../../utils/Data';



const Requests = (props) => {
  const classes = useStyles();
    
    const {
      requests,
      loading,
      error,
      getRequests,
      clearErrors,
      setAlert,
      /*approveRequest,
      deleteRequest,*/
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
=======
} from "../../../redux/actions/requestActions";
import { setAlert } from "../../../redux/actions/alertActions";

// App layout components
import RequestCard from "../../layout/RequestCard";
// Components

import useStyles from "../../layout/Navbar/navbar-jss";

// Utils
import { WEBSITE_NAME } from "../../../utils/Data";

const Requests = (props) => {
  const classes = useStyles();

  const [request, setRequest] = useState("");

  const {
    requests,
    loading,
    error,
    getRequests,
    clearErrors,
    setAlert,
    approveRequest,
    declineRequest,
  } = props;

  useEffect(() => {
    getRequests();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error && error.length) {
      if (typeof error === "object") {
        error.forEach((err) => {
          setAlert(err.msg, "danger");
        });
      } else {
        setAlert(error, "danger");
>>>>>>> bc5e177f7ced2e754838bb22b2f61064d176fd3c:client/src/components/pages/Dropdown/requests.js
      }

<<<<<<< HEAD:client/src/components/pages/Dropdown/Requests/requests.js
  
    return (
      <>
        <Helmet>
          <title>{`${WEBSITE_NAME} | Pending`}</title>
        </Helmet>
        <>
          <div className={`${classes.page} card-shadow text-center`}>
                <h3 className='title'>All requests</h3>
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
                <div className='container mt-5'>
                  {requests.map((request) => (
                    <RequestCard
                      key={request._id}
                      request={request}
                    />
                  ))}
                </div>
              )}
            </div>
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
    clearErrors,
    setAlert,
  })(Requests);
  
=======
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error]);

  const approve = async (id) => {
    await approveRequest(id);
  };

  const decline = async (id) => {
    await declineRequest(id);
  };

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Pending`}</title>
      </Helmet>
      <>
        <div className={`${classes.page} card-shadow text-center`}>
          <div className="messages mx-auto">
            <h3 className="title">All requests</h3>
            {loading ? (
              <div className="cards-container mt-5">
                <RequestCard isLoading={true} />
                <RequestCard isLoading={true} />
              </div>
            ) : !requests || !requests.length ? (
              <div className="empty">
                <h6 className="title mt-5">
                  Empty inbox{" "}
                  <span role="img" aria-label="sad">
                    😥
                  </span>
                </h6>
              </div>
            ) : (
              <div className="cards-container mt-5">
                {requests.map((request) => (
                  <RequestCard
                    key={request._id}
                    request={request}
                    approveRequest={approve(request._id)}
                    declineRequest={decline(request._id)}
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
  requests: state.request.requests,
  loading: state.request.loading,
  error: state.request.error,
});

export default connect(mapSateToProps, {
  getRequests,
  approveRequest,
  declineRequest,
  clearErrors,
  setAlert,
})(Requests);
>>>>>>> bc5e177f7ced2e754838bb22b2f61064d176fd3c:client/src/components/pages/Dropdown/requests.js
