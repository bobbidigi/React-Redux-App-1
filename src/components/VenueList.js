import React, {useEffect} from 'react'
import Venue from './Venue'
import image from './hamburger.png'
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

                <img className="hero" src={image}/>
                {props.venues.map((item, index) => (<Venue venue={item} key={index}/>)
                )}
        </div>
    )
}
