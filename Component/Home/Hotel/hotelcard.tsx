import Image from 'next/image';
import React from 'react'
import { FaHeart } from 'react-icons/fa';

type Props = {
    hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
}

}

const Hotelcard = ({hotel}: Props) => {
  return (
    <div>
        <div className='relative h-[300px] w-full rounded-lg cursor-pointer overflow-hidden group'>
            {/* {add to fav button} */}
            <div className='absolute top-4 right-4 z-20 bg-white text-black rounded-full items-center justify-center flex-col'>
                <FaHeart className='w-4 h-3 '/>
            </div>
            
            <div className='absolute inset-0 bg-black z-80 opacity-20'></div>
            <Image
              src={hotel.image}
              width={500}
              height={500}
              className='overflow-hidden w-full h-full transition-all duration-300 object-cover group-hover:scale-110'
           alt=''  />
        </div>
        <div>
          {/* {content} */}
          <div>
            <h1 className='mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer'>{hotel.name}</h1>
            <p className='text-sm text-gray-600 mt-3 font-medium'>{hotel.location}</p>
            <div className='flex items-center space-x-2  mt-6'>
              <div className='px-2 py-2 bg-blue-500 font-bold text-white rounded-md text-sm'>{hotel.rating}</div>
               <p className='text-sm text-gray-600'>Exceptional</p>
               <p className='font-bold'>{hotel.reviews} Reviews</p>
            </div>
            <div className='flex items-center justify-center space-x-2'>
              <h1 className='font-bold'> Starting from</h1>
              <h1 className='text-blue-500'>
             US {hotel.price}$</h1></div>
          </div>
        </div>
    </div>
  )
}

export default Hotelcard