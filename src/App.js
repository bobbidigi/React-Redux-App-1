import React, {useEffect, useState} from 'react';
import './App.css';
import { fetchVenues, updateLocation, updateType } from "./actions/venueActions";
import { connect } from "react-redux";
import VenueList from './components/VenueList';
import Form from './components/Form'

function App(props) {
 console.log("APP.js",props)
 const [newLocation, setNewLocation] = useState("Detroit");
 const [newType, setNewType] = useState("tacos");

  useEffect(() => {
    // kick off our asyncronous action creator
    props.fetchVenues(newLocation, newType);
  }, []);

  useEffect(()=>{
    props.fetchVenues(newLocation, newType)
  },[newType, newLocation])

  return (
    <div className="App">
      
      <Form
      newLocation={newLocation} 
      setNewLocation={setNewLocation} 
      newType={newType}
      setNewType={setNewType}
      updateLocation={props.updateLocation}
      updateType={props.updateType} />
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
  fetchVenues,
  updateLocation,
  updateType
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
