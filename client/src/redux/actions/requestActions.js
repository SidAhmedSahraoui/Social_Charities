import axios from 'axios';

import {
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  CLEAR_ERRORS
} from '../types';


// Request
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

  // Clear errors
export const clearErrors = () => {
    return { type: CLEAR_ERRORS };
  };