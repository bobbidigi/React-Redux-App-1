import React from 'react'

const Form = (props) => {

    

    console.log("form-props", props)
    const handleSubmit = e => {
        e.preventDefault();
        // setNewLocation("");
        props.updateLocation(props.newLocation || props.location);
        props.fetchVenues(props.newLocation, props.newType)
    };
    
      //Ask Skylar if there is a way to 
    const handleSelectChanges = e => {
        props.setNewType(e.target.value)
    }
    
    const handleInputChanges = e => {
        props.setNewLocation(e.target.value);
    };  

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="newLocation"
            // placeholder={props.location} 
            placeholder="city"
            value={'' || props.newLocation}
            onChange={handleInputChanges}
          />
          <select name="newType" onChange={handleSelectChanges}>
            <option value={props.newType}>{props.newType}</option>
            <option value='Restaurants'>Restaurants</option>
            <option value="Events">Events</option>
            <option value="Brewery">Brewery</option>
          </select>
          <button type="submit">Submit</button>
        </form>
    )
}

export default Form


