import React, { useEffect, useState } from 'react';
import './EventoStyle.css';
import { Link } from 'react-router-dom';

function EventoDetalles() {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    fetch('https://018123df-1a58-480a-a0b1-74bef2cb6e76.mock.pstmn.io/api/events?tipo=evento%20actual&categoria=evento')
      .then((res) => res.json())
      .then((events) => {
        if (events.length > 0) {
          setEventData(events[0]);
        }
      });
  }, []);

  if (eventData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div classNam="rowContainer">
        <div className="divider"></div>
        <div className="title">
          <div className="titlesection" id="titlesection">
            <h1>{eventData.nombre} {eventData.fecha}</h1>
          </div>
        </div>
        <div className="containerEvent">
          <div className="row">
            <div className="divider"></div>
          </div>
          <div className="row">
            <div className="box">
              <div id="eventfoto">
                <img src={eventData.imagen} alt="" />
              </div>
              <div id="eventdetails">
                <p>Fecha: {eventData.fecha}</p>
                <p>Hora: {eventData.hora}</p>
                <p>Ubicación: {eventData.ubicacion}</p>
              </div>
              <div id="eventdescription">
                <p>{eventData.descripcion}</p>
              </div>
            </div>
          </div>
          
          
            <div className="calltoaction">
              <Link to="/apuntadoEventoModal">
                <button id="calltoaction">¡Apúntate!</button>
              </Link>
            </div>
         
          <div className="row">
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default EventoDetalles;
