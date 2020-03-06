import React, {useEffect} from 'react'
import Venue from './Venue'
import hamburgerImage from './hamburger.png'
import ogImage from './og.png'

import {useDispatch} from 'react-redux'
import {fetchVenues} from '../actions/venueActions'

export default function VenueList(props) {

    const dispatch = useDispatch()

    // useEffect(()=>{
    //     // dispatch(fetchVenues(props.newLocation, props.categoryID))
    // },[ props.newLocation])

    // console.log("VenueList", props)
    return (
        <div className="venue-list">
            <h1>{props.userLocation}</h1>

                <img className="hero" src={hamburgerImage}/>
                {/* got rid of this image */}
                {/* <img className="hero" src={ogImage}/> */}
                {props.venues.map((item, index) => (<Venue venue={item} key={index}/>)
                )}
        </div>
    )
}
