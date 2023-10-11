import {useEffect, useState} from 'react';
import Card from './CardEP';
import './main.css'

export default function CurrentEvent(){

    
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch('http://44.215.37.34/eventoactual')
        .then((res) => {
            if (!res.ok) {
            throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((data) => {
            setEvents(data);
        })
        .catch((error) => {
            setError(error);
        });
    }, []);
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    return (
        <div>
        {events.map((item) => (
            <Card
            event_img={item.imagen}
            event_name={item.name}
            localitation={item.location}
            event_date={item.date}
            event_desc={item.description}
            />
        ))}
        </div>
    );
    }
    