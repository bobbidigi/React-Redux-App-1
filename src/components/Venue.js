import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export default function Venue(props) {

// console.log("Venue", props)
// console.log("categories", props.venue.categories)


const [newImage, setImg] = useState('https://picsum.photos/64/64?random=1?grayscale')

useEffect(()=>{
    if(props.venue.categories[0]){
        const icon = props.venue.categories[0].icon
        // console.log(icon)
        setImg(`${icon.prefix}64${icon.suffix}`)
    }else{
        console.log("no icon")
        setImg('https://picsum.photos/64/64?random=1?grayscale')
    }
},[])


// To assemble a photo URL, combine the response’s prefix + size + suffix. 
// Example: https://igx.4sqi.net/img/general/300x500/5163668_xXFcZo7sU8aa1ZMhiQ2kIP7NllD48m7qsSwr1mJnFj4.jpg

    return (
        <Link to={{
            pathname: '/venue',
            state: {
              venue: props.venue,
              icon: newImage 
            }
          }}
         className="card">
            <img className="icon" src={newImage} alt="venue-icon"/>
            <div className="info">
                <h2>{props.venue.name}</h2>
                <h4>{props.venue.location.formattedAddress[0]}</h4>
            </div>
        </Link>
    )
}
