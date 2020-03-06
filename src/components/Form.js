import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {updateLocation, updateCategory, fetchVenues} from '../actions/venueActions'

const Form = (props) => {
    const dispatch = useDispatch()
    const [newLocation, setNewLocation] = useState(props.location)
    const [newCategory, setNewCategory] = useState(props.categoryID)

  useEffect(()=>{
      // dispatch(fetchVenues(newLocation, props.categoryID))
      dispatch(updateLocation(newLocation))
    },[newLocation])

    useEffect(()=>{
      // dispatch(fetchVenues(newLocation, props.categoryID))
      dispatch(updateCategory(newCategory))
    },[newCategory])


    
    // console.log("form-props", props)
    const handleSubmit = e => {
        e.preventDefault();
        // setNewLocation("");
        dispatch(updateLocation(newLocation || props.location));
        dispatch(fetchVenues(newLocation, props.categoryID));
    };
    
      //Ask Skylar if there is a way to 
    const handleSelectChanges = e => {
      // console.log(e.target.name)
      // console.log(e.target.value)
        setNewCategory(e.target.value)
    }
    
    const handleInputChanges = e => {
        setNewLocation(e.target.value);
    };  

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="location"
            placeholder={props.userLocation} 
            // placeholder="city"
            value={'' || props.newLocation }
            onChange={handleInputChanges}
          />
          <select name={props.categoryID} onChange={handleSelectChanges}>
            <option value="4bf58dd8d48988d1c1941735">Tacos 🌮</option>
            <option value='4bf58dd8d48988d1d8941735'>LGBT 🏳️‍🌈</option>
            <option value="4bf58dd8d48988d120941735">Karaoke 🎤</option>
            <option value="4d4b7105d754a06376d81259">Bar 🍺</option>
            <option value="52e81612bcbc57f1066b79ef" >Country Dancing 🤠</option>
            <option value="4bf58dd8d48988d17c941735">Casino 🎰</option>
            <option value="4bf58dd8d48988d175941735">Yoga 🧘</option>
            <option value="4bf58dd8d48988d1e4941735">Campgrounds 🏕️</option>
            <option value="4bf58dd8d48988d163941735">Parks 🏞️</option>
            <option value="52c71aaf3cf9994f4e043d17">Marijuana 💚</option>
          </select>
          <button type="submit">Submit</button>
        </form>
    )
}

export default Form


