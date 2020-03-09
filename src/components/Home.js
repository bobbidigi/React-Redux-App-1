import React, {useEffect, useState} from 'react'
import Form from './Form'
import VenueList from './VenueList'

import { fetchVenues, fetchLocation } from "../actions/venueActions";
import { useSelector, useDispatch } from "react-redux";


export default function Home(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    useEffect(() => {
        // kick off our asyncronous action creator
        // fetch user location which also dispatches update location to set the global state of location to the users location
        dispatch(fetchLocation())
    }, []);
    
    useEffect(()=>{
        dispatch(fetchVenues(state.location, state.categoryID))
    },[state.location])
    
    useEffect(()=>{
        dispatch(fetchVenues(state.location, state.categoryID))
    },[state.categoryID])


    return (
        <div>
            <Form
            userLocation={state.userLocation} 
            categoryID={state.categoryID}
            />
            <VenueList
            {...props}
            location={state.location}
            venues={state.venues}
            />
        </div>
    )
}
