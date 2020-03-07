import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {fetchDetails} from '../actions/venueActions'



export default function VenueDetails(props) {
    console.log("details", props.history.location.state.venue.id)
    const id = props.history.location.state.venue.id
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [venueDetails, setVenueDetails] = useState(state.details)
    

    useEffect(()=>{
        dispatch(fetchDetails(id))
    },[])
    useEffect(()=>{
        console.log("venueDetailState",state.details)
        setVenueDetails(state.details)
        console.log("vendeets",venueDetails)
    },[state.details])

    return (
        <div >
            <p>{venueDetails.name}</p>
            <p>{venueDetails.url}</p>
            <div className='address'>
         {/* {state.details.location.formattedAddress[0]} , {state.details.location.formattedAddress[1]} */}
        </div>
            {/* <p>{venueDetails.location.formattedAddress[0]}</p> */}
        </div>
    )
}


