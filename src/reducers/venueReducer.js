import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    UPDATE_LOCATION,
    UPDATE_TYPE
  } from "../actions/venueActions";


const initialState = {
    // our "success" state
    venues: [],
    // want to make sure we account for all possible states,
    // including the loading and error states
    isLoading: false,
    error: null,
    location: '',
    type: ''
  };

  export function reducer(state = initialState, action) {
    switch (action.type) {
      //FETCH VENUES REDUCER CASES
      case FETCH_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_SUCCESS:
        return {
          ...state,
          venues: [...action.payload],
          isLoading: false
        };
      case FETCH_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
        // UPDATE REDUCER CASES
        case UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload
      };
      case UPDATE_TYPE:
      return {
        ...state,
        type: action.payload
      };
      default:
        return state;
    }
  }