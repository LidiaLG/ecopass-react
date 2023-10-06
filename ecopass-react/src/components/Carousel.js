import React, { useState, useEffect, useRef} from 'react';
import './main.css'
import AppCarousel from './AppCarousel';





export default function Carousel(){
    
  const trackRef = useRef(null);
  const listRef = useRef(null);
  const slickRef = document.getElementsByClassName('slick');

  const [leftPosition, setLeftPosition] = useState(0);

  const move = (value) => {
    const slickWidth = slickRef.current.offsetWidth;
    const track = trackRef.current;
    const list = listRef.current;

    const trackWidth = track.offsetWidth;
    const listWidth = list.offsetWidth;

    let newPosition = 0;

    if (track.style.left === '') {
      newPosition = 0;
    } else {
      newPosition = parseFloat(track.style.left.slice(0, -2)) * -1;
    }

    if (value === 2) {
      newPosition = Math.min(newPosition + slickWidth, 0);
    } else if (value === 1) {
      newPosition = Math.max(newPosition - slickWidth, -(trackWidth - listWidth));
    }

    track.style.left = `${newPosition}px`;
    setLeftPosition(newPosition);
  };

  

  useEffect(() => {
    const buttonPrevElement = document.getElementById('button-prev');
    const buttonNextElement = document.getElementById('button-next');

    const buttonPrev = () => move(1);
    const buttonNext = () => move(2);

    buttonPrevElement.addEventListener('click', buttonPrev);
    console.log("me muevo para <-")
    buttonNextElement.addEventListener('click', buttonNext);
    console.log("me muevo para ->")

    return () => {
      buttonPrevElement.removeEventListener('click', buttonPrev);
      buttonNextElement.removeEventListener('click', buttonNext);
    };
  }, []);
    

          
    return(
      
        
      <div className='carousel'>
        <h1 class="title2">¡¡EVENTOS ANTERIORES!!</h1>
        <div class="slick-list" id="list" ref={listRef}>
          <button class="slick-arrow slick-prev" id="button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
            </svg>
          </button>
          <div className='slick-track'id='slick-track' ref={trackRef}>
            
              <AppCarousel/>   
            
          </div>
          <button class="slick-arrow slick-next" id="button-next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              {/* 
                Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com
                License - https://fontawesome.com/license (Commercial License)
                Copyright 2023 Fonticons, Inc.
              */}
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
            </svg>
          </button>  
        </div>
      </div>

      
  );
}

        
        
 


