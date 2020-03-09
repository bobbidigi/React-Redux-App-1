import axios from "axios";

//Fetch user location
export const LOCATION_START = "LOCATION_START";
export const LOCATION_SUCCESS = "LOCATION_SUCCESS";
export const LOCATION_ERROR = "LOCATION_ERROR";

//Fetch
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
// Update
export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const UPDATE_CATEGORY = "UPDATE_TYPE";
// FETCH DETAILS
export const FETCH_DETAILS_SUCCESS = "FETCH_DETAILS_SUCCESS";


export function fetchVenues(city, queryID) {
  const REACT_APP_ID = process.env.REACT_APP_ID;
  const REACT_APP_SECRET = process.env.REACT_APP_SECRET;
  // console.log(REACT_APP_ID)
  // this is our "thunk" function. redux-thunk middleware
  // automatically gives us access to the dispatcher as a parameter
  return dispatch => {
    // we can kick off as many actions as we want,
    // whenever we want. allows our action creator to be asyncronous.
    dispatch({ type: FETCH_START });
    axios
      .get(
        `https://api.foursquare.com/v2/venues/search?client_id=${REACT_APP_ID}&client_secret=${REACT_APP_SECRET}&v=20180323&limit=20&near=${city}&categoryId=${queryID}&&radius=10000`
      )
      .then(res => {
        // Code for handling API response
        console.log("FSQ", res.data.response.venues);
        dispatch({ type: FETCH_SUCCESS, payload: res.data.response.venues });
      })
      .catch(function() {
        // Code for handling errors
      });
  };
}

//UPDATE ACtions
export function updateLocation(city) {
  return dispatch => {
    dispatch({ type: UPDATE_LOCATION, payload: city });
  };
}

export function updateCategory(id){
  return dispatch => {
    dispatch({type: UPDATE_CATEGORY, payload: id})
  }
}


//location action
export function fetchLocation() {
  return dispatch => {
    dispatch({ type: LOCATION_START });

    axios.get('https://ipinfo.io?token=ea7f69e10eff85')
    .then(function (res) {
      // handle success
      console.log("location response",res.data.city);
      dispatch({ type: LOCATION_SUCCESS, payload: res.data.city });
      dispatch({type: UPDATE_LOCATION, payload: res.data.city })
    })
    .catch(function (error) {
      // handle error
      console.log(error.response);
    })
  }
}


//fetch venue details
export function fetchDetails(id) {
  const REACT_APP_ID = process.env.REACT_APP_ID;
  const REACT_APP_SECRET = process.env.REACT_APP_SECRET;
  return dispatch => {
    dispatch({ type: FETCH_START });
    axios.get(`https://api.foursquare.com/v2/venues/${id}?client_id=${REACT_APP_ID}&client_secret=${REACT_APP_SECRET}&v=20180323`)
    .then(function (response) {
    // handle success
    console.log("detailsrequest",response.data.response.venue);
      dispatch({type: FETCH_DETAILS_SUCCESS, payload: response.data.response.venue})
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
  }
}