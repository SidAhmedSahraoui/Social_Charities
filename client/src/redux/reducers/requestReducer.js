import {
    REQUEST_SUCCESS,
    REQUEST_FAIL,
    SET_LOADING_REQUESTS,
    GET_REQUESTS,
    GET_REQUESTS_ERROR,
    CLEAR_REQUESTS,
    CLEAR_ERRORS,
        } from '../types';
  
  const initialState = {
    loading: true,
    request: null,
    error: null,
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_SUCCESS :

        return {
          ...state,
          ...action.payload,
          loading: false,
        };

      case CLEAR_REQUESTS:
        return {
        ...state,
        requests: null,
      };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
          error_send: null,
        };
        case REQUEST_FAIL:

        return {
        ...state,
        loading: false,
        request: null,
        error: action.payload || null,
        };

        case GET_REQUESTS :
        
        return {
        ...state,
        error: false,
        loading: false,
        requests: action.payload,
      };
      
      case GET_REQUESTS_ERROR:
      
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

      case SET_LOADING_REQUESTS:
      
      return {
        ...state,
        loading: true,
      };
        default:
        return state;
  }
};