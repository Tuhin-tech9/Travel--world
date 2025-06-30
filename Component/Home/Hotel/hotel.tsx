import SectionHotel from '@/Component/Helper/SectionHotel'
import { hotelsData } from '@/Data/data'
import React from 'react'
import Hotelcard from './hotelcard'

// type Props = {}

const Hotel = () => {
  return (
    <div className='pt-20 pb-20'>
        <SectionHotel/>
        <div className='w-[80%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16 mx-auto'>
           {
            hotelsData.map((data,i)=>{
                return <div key={data.id} data-aos="fade-right" data-aos-anchor-placemen="top-center" data-aos-delay={`${i*100}`} >
                    <Hotelcard hotel={data}/>
                    </div>
            })
           }
        </div>
    </div>
  )
}

export default Hotel