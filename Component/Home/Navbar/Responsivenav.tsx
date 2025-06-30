"use client"
import React, { useState } from 'react'
import Navbar from './nav'
import Mobilenav from './Mobilenav'



const Responsivenav = () => {
  const [show ,setshow]=useState(false)
  const handelshow=()=>{
    setshow(true)
  }
  const handelclose=()=>{
    setshow(false)
  }
  return (
    <div>
        <Navbar openNav={handelshow}/>
        <Mobilenav shownav={show} close={handelclose}/>
    </div>
  )
}

export default Responsivenav