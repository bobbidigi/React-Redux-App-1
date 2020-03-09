import React, {useEffect} from 'react'
import Venue from './Venue'
import hamburgerImage from './images/hamburger.png'


export default function VenueList(props) {
    return (
        <div className="venue-list">
            <h1>{props.location}</h1>
                <img className="hero" src={hamburgerImage}/>

                {props.venues.map((item, index) => (<Venue venue={item} key={index}/>)
                )}
        </div>
    )
}
