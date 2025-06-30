import Searchbox from '@/Component/Helper/searchbox'
import Link from 'next/link'
import React from 'react'

// type Props = {}

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
        {/* {overlay} */}
        <div className='absolute w-full h-full bg-gray-800 opacity-0'></div>
       <video
    src="/image/hero1.mp4"
  autoPlay
  muted
  loop
  preload="metadata"
  className="w-full h-full object-cover "
/>
   <div className='absolute z-[100] w-full h-full top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] '>
    <div className='flex items-center justify-center flex-col w-full h-full'>
        <div className='' data-aos="fade-up">
            <h1 className='text-amber-100 uppercase font-semibold text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem]'>lets enjoy your travel</h1>
            <p className='text-white text-center uppercase lg:text-[13px] tracking-[0.3rem] md:text-base text-lg'>get a best price on 2,00,000 properties,worldwide</p>
        </div>
         <Searchbox/>
        <Link href="" className='rounded px-14 py-2.5 bg-rose-600 -mt-3 md:px-28 md:py-4 overflow-hidden  hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white '>
        <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-300 transfrom'></span>
        <span className=' relative font-bold'>Search </span>
        </Link>
    </div>
   </div>
    </div>
  )
}

export default Hero