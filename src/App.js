import React, {useEffect, useState} from 'react';
import './App.css';
import { fetchVenues, updateLocation, updateType } from "./actions/venueActions";
import { connect } from "react-redux";
import VenueList from './components/VenueList';

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


  const handleSubmit = e => {
    e.preventDefault();
    // setNewLocation("");
    props.updateLocation(newLocation || props.location);
    props.fetchVenues(newLocation, newType)
  };

  //Ask Skylar if there is a way to 
  const handleSelectChanges = e => {
    setNewType(e.target.value)
  }

  const handleInputChanges = e => {
    setNewLocation(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="newLocation"
            // placeholder={props.location} 
            placeholder="city"
            value={'' || newLocation}
            onChange={handleInputChanges}
          />
          <select name="newType" onChange={handleSelectChanges}>
            <option value={newType}>{newType}</option>
            <option value='Restaurants'>Restaurants</option>
            <option value="Events">Events</option>
            <option value="Brewery">Brewery</option>
          </select>
          <button type="submit">Submit</button>
        </form>

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
