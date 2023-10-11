import React from 'react'
import {useEffect, useState} from 'react';
import Event from './EventGalery';
import './Galery.css'

const Galery = () => {
    const [events, setEvents] = useState([]);
    
        useEffect(()=>{
            fetch('https://018123df-1a58-480a-a0b1-74bef2cb6e76.mock.pstmn.io/api/events')
            .then((res) => res.json())   
            .then (data => {
                setEvents(data)        
            })  
        }, [])
    
        
        return(
            
            <div className="row" id="galery">
            {events
                .filter((item) => item.id === 1)
                .map((item) =>
                item.imagenesEvento.map((imagen, imgIndex) => (
                    <Event key={`event-${item.id}-${imgIndex}`} event_img={imagen} />
                ))
                )}
            </div>
        )
}

export default Galery