import React, { useEffect, useState } from 'react';
import './recompensa.css';
// import Evento from './Evento'

const Recompensa = () => {
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    fetch('https://018123df-1a58-480a-a0b1-74bef2cb6e76.mock.pstmn.io/api/events?tipo=evento%20actual&categoria=recompensa')
      .then((res) => res.json())
      .then((eventsData) => {
        setEvento(eventsData[0]);
      });
  }, []);

  return (
    <>
      <div className="row">
        <div className="divider"></div>
      </div>
      {evento && (
        <div className="title">
          <div className="titlesection">
            <h1>
              {evento.nombre} {evento.fecha}
            </h1>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="divider"></div>
        </div>
        {/* ponemos una condición para que no de error si la solicitud a la API tarda en devolver los datos */}
        {evento && (
          <div className="row">
            <div className="box">
              <div id="rewardfoto">
                <img src={evento.imagen} alt="fotografía del evento de recompensa" />
              </div>
              <div id="rewarddetails">
                <p>Fecha: {evento.fecha}</p>
                <p>Hora: {evento.hora}</p>
                <p>Ubicación: {evento.ubicacion}</p>
              </div>
              <div id="rewarddescription">
                <p>{evento.descripcion}</p>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="divider"></div>
          <div className="calltoaction">
            <a href=".">
              <button id="calltoaction">Gana participando en una mejora para el mundo</button>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="divider"></div>
        </div>
      </div>
    </>
  );
};

export default Recompensa;
