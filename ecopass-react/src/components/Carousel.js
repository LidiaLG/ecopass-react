
import React from "react";
import CardC from './CardC'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {useEffect, useState} from 'react';
import './carousel.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay';


import { Pagination, Navigation, Autoplay } from "swiper/modules";

function Carousel(){
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('https://018123df-1a58-480a-a0b1-74bef2cb6e76.mock.pstmn.io/api/events')
      .then((res) => res.json())
      .then(data => {
        setEvents(data);
      })
  }, []);

  return(
    <>
    <h1>¡¡EVENTOS ANTERIORES!!</h1>
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation,Autoplay]}
      autoplay= {{
        delay: 3000, 
        disableOnInteraction: false,
      }}
      className="mySwiper"
      scrollbar={{ draggable: true }}
      spaceBetween={30}
      breakpoints={{
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3, 
        },
      }} 
    >
      {
        events.map( item => {
          if (item.tipo == "evento anterior")
          return(
            <SwiperSlide>
                <CardC key={item.id} event_img={item.imagen} event_name={item.nombre} />
            </SwiperSlide>
                )
            })
        }
    </Swiper>
    </>
  );

  
}
export default Carousel;