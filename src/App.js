import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home'
import VenueDetails from './components/VenueDetails'

function App(props) {

  return (
    <div className="App">

      <Route 
        exact path="/" 
        render={props => <Home/>
        }/>

      <Route 
        exact path="/venue" 
        render={props => <VenueDetails {...props} /> } />
    </div>
  );
}
export default App;
