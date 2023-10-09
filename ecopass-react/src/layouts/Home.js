import React from 'react'
import CurrentEvent from '../components/CurrentEvent'
import Streamer from '../components/Streamer'
import NextEvent from '../components/NextEvent'
import Carousel from '../components/Carousel'
import Sponsor from '../components/Sponsor'

const Home = () => {
  return (
    <>
        <CurrentEvent/>
        <Streamer/>
        <NextEvent/>
        <Carousel/>
        <Sponsor/>
    </>
  )
}

export default Home