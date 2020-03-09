import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchDetails} from '../actions/venueActions'
import Map from './Map'
import '../App.css';



export default function VenueDetails(props) {
    // console.log("details", props.history.location.state.venue.id)
    const id = props.history.location.state.venue.id
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [venueDetails, setVenueDetails] = useState(state.details)
    const {lat, lng} = useSelector(state => state.details.location)

    

    useEffect(()=>{
        dispatch(fetchDetails(id))
    },[])

    useEffect(()=>{
        setVenueDetails(state.details)
    },[state.details])
    
    useEffect(()=>{
        console.log("deets", venueDetails)
        // console.log(venueDetails.location.crossStreet)
    },[venueDetails])


    return (
                <div className="details-container">
                    {venueDetails.bestPhoto && <img className="hero" src={venueDetails.bestPhoto.prefix + '900x700' + venueDetails.bestPhoto.suffix}/>}
                    <div className="details-info">
                        <h3>{venueDetails.name}</h3>
                        <a className="social" href={venueDetails.url}>{venueDetails.url}</a><br/>
                        {venueDetails.name &&  <>
                        {venueDetails.location.formattedAddress[0]}
                        {venueDetails.location.crossStreet}</>}
                        {venueDetails.contact && <p>{venueDetails.contact.formattedPhone}</p>}
                    </div>
                    <Map lat={lat} lng={lng}/>
                </div>
        
    )
}


