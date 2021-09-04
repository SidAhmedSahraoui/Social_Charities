import axios from 'axios';

import {
  SET_LOADING_REQUESTS,
  GET_REQUESTS,
  GET_REQUESTS_ERROR,
  CLEAR_REQUESTS,
  CLEAR_ERRORS,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
} from '../types';


// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};

// Register Request
export const request = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {

    const res = await axios.post('/api/request', formData, config);

    dispatch({
      type: REQUEST_SUCCESS,
      payload: res.data,
    });

  } catch (error) {
    dispatch({
      type: REQUEST_FAIL,
      payload: error?.response?.data,
    });
  }
};

// Get requests
export const getRequests = () => async (dispatch) => {
  try {
    dispatch(setLoadingRequests());
    const res = await axios.get('/api/request');

    dispatch({
      type: GET_REQUESTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_REQUESTS_ERROR,
      payload: error.response?.data,
    });
  }
};
// Set loading messages to true
export const setLoadingRequests = () => {
  return { type: SET_LOADING_REQUESTS };
};


// Clear 
export const clearRequests = () => {
  return { type: CLEAR_REQUESTS };
};

