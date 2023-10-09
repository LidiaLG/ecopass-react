import {useEffect, useState} from 'react';
import Card from './CardEA';
import './main.css';


function CurrentEvent(){

const [events, setEvents] = useState([]);

    useEffect(()=>{
        fetch('https://018123df-1a58-480a-a0b1-74bef2cb6e76.mock.pstmn.io/api/events')
        .then((res) => res.json())   
        .then (data => {
            setEvents(data)        
        })  
    }, [])

    return(

        events.map( item=> {
            if (item.tipo === "evento actual" && item.categoria === "recompensa"){
                
                return<Card event_img={item.imagen} event_name={item.nombre} localitation={item.ubicacion} event_date={item.fecha} event_desc={item.descripcion}/>
                
            }
        
})
    )
}

export default CurrentEvent;