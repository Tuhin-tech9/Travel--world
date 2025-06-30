"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Scrolltotop = () => {
    const [isvisble,setIsvisible]=useState(false)
    useEffect(()=>{
        const toogle=()=>{
            if(window.scrollY>300){
                setIsvisible(true)
            }else{
                setIsvisible(false)
            }


        }
        window.addEventListener("scroll",toogle)
        return ()=>  window.removeEventListener("scroll",toogle)

    },[])
    const scrolltotop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div className='fixed  bottom-4 animate-pulse right-4'>
      
        {
            isvisble && (
              <button
                className='bg-rose-500 rounded-full text-white w-12 h-8 flex items-center justify-center focus:outline-none '
                
                onClick={scrolltotop}
              >
                <FaArrowUp/>
              </button>
            )
        }
       
     
    </div>
  )
}

export default Scrolltotop
