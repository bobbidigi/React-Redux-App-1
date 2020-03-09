import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home'
import VenueDetails from './components/VenueDetails'
import ogImage from './components/images/og.png'
import Footer from './components/Footer'

function App(props) {

  return (
    <div className="App">
      <img src={ogImage} style={{display: 'none'}}></img>

      <Route 
        exact path="/" 
        render={props => <Home/>
        }/>

      <Route 
        exact path="/venue" 
        render={props => <VenueDetails {...props} /> } />
        <Footer/>
    </div>
  );
}
export default App;
