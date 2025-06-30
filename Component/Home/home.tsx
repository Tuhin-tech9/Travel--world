"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/hero'
import Destination from './Destination/destination'
import Hotel from './Hotel/hotel'
import Footer from './Footer/footer'
import Footer2 from './Footer2/footer2'
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Home = () => {
  useEffect(()=>{
    const intOs=async()=>{
      await import("aos")
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement:"top-bottom"
      })
    }
intOs()
  },[])
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Destination/>
      <Hotel/>
      <Footer/>
      <Footer2/>
    </div>
  )
}

export default Home