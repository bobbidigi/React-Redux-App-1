import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    UPDATE_LOCATION,
    UPDATE_CATEGORY,
    LOCATION_START,
    LOCATION_SUCCESS,
    LOCATION_ERROR,
    FETCH_DETAILS_SUCCESS
  } from "../actions/venueActions";


const initialState = {
    // our "success" state
    venues: [],
    // want to make sure we account for all possible states,
    // including the loading and error states
    isLoading: false,
    error: null,
    location: '',
    type: '',
    userLocation: '',
    categoryID: '4bf58dd8d48988d1c1941735',
    details: {
      location: {
        lat: 0,
        lng: 0
      }
    }
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
      case UPDATE_CATEGORY:
      return {
        ...state,
        categoryID: action.payload
      };

      //USER LOCATION
      case LOCATION_START:
        return{
          ...state,
          isLoading: true
        }
      case LOCATION_SUCCESS:
        return{
          ...state,
          isLoading: false,
          userLocation: action.payload
        }
      case LOCATION_ERROR:
        return{
          ...state,
          isLoading: false,
          error: action.payload
        }
      case FETCH_DETAILS_SUCCESS:
        return {
          ...state,
          details: action.payload,
          isLoading: false,
        }      
      default:
        return state;
    }
  }