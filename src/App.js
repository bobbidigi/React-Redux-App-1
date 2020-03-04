import React, {useEffect} from 'react';
import './App.css';
import { fetchVenues } from "./actions/venueActions";
import { connect } from "react-redux";
import VenueList from './components/VenueList';

function App(props) {
 console.log("APP.js",props)

  useEffect(() => {
    // kick off our asyncronous action creator
    props.fetchVenues("detroit", "tacos");
  }, []);



  return (
    <div className="App">
     <VenueList venues={props.venues}/>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    isLoading: state.isLoading,
    venues: state.venues,
    error: state.error
  };
}

const mapDispatchToProps = {
  // send a version of our action creator that's attached to
  // the dispatcher to the component as a prop
  fetchVenues
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
