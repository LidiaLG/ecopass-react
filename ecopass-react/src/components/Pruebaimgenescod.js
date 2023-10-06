//de donde salen las fotos
import {useEffect, useState} from 'react';

import Callback1 from "./PruebaImagenes";

export default function Pruebaimagenescod(){
    const [events, setEvents] = useState([]);

    useEffect(()=>{
        fetch('https://018123df-1a58-480a-a0b1-74bef2cb6e76.mock.pstmn.io/api/events')
        .then((res) => res.json())   
        .then (data => {
            setEvents(data)        
        })  
    }, [])

    return(
        
            events.map( item =>{
                return <Callback1 image={item.imagen}/>

            })
        
    )
}