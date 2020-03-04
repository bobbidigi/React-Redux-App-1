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
      
      default:
        return state;
    }
  }