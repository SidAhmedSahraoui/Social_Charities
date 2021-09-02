import axios from 'axios';

import {
  USER_LOADED,
  SETTINGS_LOADED,
  UPDATE_SETTINGS,
  UPDATE_PASSWORD,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_LOADING,
  SET_LOADING_SETTINGS,
  AUTH_ERROR,
  SETTINGS_ERROR,
  CLEAR_ERRORS,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
} from '../types';


// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
// Set loading to true
export const setLoading = () => {
  return { type: SET_LOADING };
};

// Register Request
export const request = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    dispatch(setLoading());

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