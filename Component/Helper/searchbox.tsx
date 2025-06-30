import React from 'react'
import { FaCalendar, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'



const Searchbox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>
        <div className='flex items-center space-x-6'>
            <FaMap className='w-5 h-6 text-blue-600'/>
            <div>
                <p className='text-[10px] lg:text-[20px] text-lg font-medium' >Location</p>
                <input type='text' placeholder='where are you going?' className='outline-none border-none placeholder:text-gray-500'/>
            </div>
        </div>
        <div className='flex items-center space-x-6 '>
          <FaCalendar className='w-5 h-6 text-blue-600'/>
          <div>
            <p className='text-[10px] lg:text-[20px] text-lg font-medium'>Start date </p>
            <input  type='date' placeholder='select the date' className='outline-none border-none placeholder:text-gray-500'/>
          </div>

        </div>
         <div className='flex items-center space-x-6 '>
          <FaCalendar className='w-5 h-6 text-blue-600'/>
          <div>
            <p className='text-[10px] lg:text-[20px] text-lg font-medium'>End date </p>
            <input  type='date' placeholder='select the date' className='outline-none border-none placeholder:text-gray-500'/>
          </div>

        </div>
          <div className='flex items-center space-x-6 '>
          <FaUserGroup className='w-5 h-6 text-blue-600'/>
          <div>
            <p className='text-[10px] lg:text-[20px] text-lg font-medium'>Guest </p>
            <p className='text-base text-mormal'>1 Guest in 1 Room</p>
          </div>

        </div>
    </div>
  )
}

export default Searchbox