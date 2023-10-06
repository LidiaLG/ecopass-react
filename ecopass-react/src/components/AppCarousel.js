
import React, { useEffect, useState } from 'react';

import './main.css'



export default function AppCarousel(){
    const [events, setEvents] = useState([]);

    useEffect(()=>{
      fetch('https://018123df-1a58-480a-a0b1-74bef2cb6e76.mock.pstmn.io/api/events')
      .then((res) => res.json())   
      .then (data => {
          setEvents(data)        
      })  
    }, []) ;
    
    const renderedItems = events.map((item) => {
        if (item.tipo === "evento anterior") {
          return (
            <div className="slick" key={item.id}>
              <div className="centro">
                <picture>
                  <img src={item.imagen} alt="" />
                </picture>
                <h4><strong>{item.nombre}</strong></h4>
              </div>
            </div>
          );
        }
        return null; // Devuelve null si el tipo no coincide
      });
    
    return renderedItems;

    
    }
        
       