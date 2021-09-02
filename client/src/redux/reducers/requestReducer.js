import {
    REQUEST_SUCCESS,
    REQUEST_FAIL,
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

        case REQUEST_FAIL:

        return {
        ...state,
        loading: false,
        request: null,
        error: action.payload || null,
        };
        default:
        return state;
  }
};