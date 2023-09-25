import React, { useState, useEffect } from 'react';
import DataService from '../services/DataServices.js';
import Evento from './Evento.js';

const dataService = new DataService();

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    dataService.getEvento(setEvents);
  }, []);

  return (
    events.map((item) => (
      <Evento
        key={item.id}
        eventName={item.nombre}
        eventType={item.tipo}
        description={item.descripcion}
        img={item.imagen}
        location={item.ubicacion}
        eventDate={item.fecha}
        eventTime={item.hora}
      />
    ))
  );
}

export default EventList;
