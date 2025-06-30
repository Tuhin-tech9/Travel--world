"use client"
import { navLinks } from '@/constants/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'

type Props = {
    openNav:()=>void
}

const Navbar = ({openNav}: Props) => {
    const [navBg,setnavbg]=useState(false)
    useEffect(()=>{
        const handeler=()=>{
            if(window.scrollY >=90) setnavbg(true)
            if(window.scrollY <90)  setnavbg(false) 
        }
      window.addEventListener("scroll",handeler)
      return ()=>window.removeEventListener("scroll",handeler)
    })
      const changebg=navBg?"bg-blue-950":"fixed"
    return (
        <>
            <div className={` ${changebg} transition-all duration-300 h-[12vh] z-[1000] fixed w-full`}>
                <div className='flex items-center mx-auto h-full justify-between xl:w-[80%] w-[90%]'>
                    {/* {logo} */}
                    <div className='flex items-center space-x-2 gap-2'>
                        <div className='h-10 w-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
                            <TbAirBalloon />
                        </div>
                        <h1 className='text-xl md:text-1xl font-bold text-white uppercase' >Tripi</h1>
                    </div>

                    {/* {navliks} */}
                    <div className='hidden lg:flex items-center flex-row space-x-10'>
                        {
                            navLinks.map((link) => (
                                <Link href={link.url} key={link.id}>
                                    <p className='relative font-medium text-white w-fit block after:block after:content-[``] after:absolute after:h-[3px] after:bg-yellow-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right'>{link.label}</p>
                                </Link>
                            ))
                        }
                    </div>
                    {/* {buuton} */}
                    <div className='flex items-center space-x-4'>
                        <button className='text-1xl  cursor-pointer md:px-12 md:py-2.5 px-8 py-2 bg-amber-50 rounded-lg hover:bg-gray-200 transition-all duration-300 '>Book Now</button>
                       {/* {burger menu} */}
                       <HiBars3BottomLeft onClick={openNav} className='w-10 h-8 text-white cursor-pointer lg:hidden'/>
                    </div>
                </div>

            </div>

        </>
    )


}

export default Navbar