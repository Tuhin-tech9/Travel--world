import { navLinks } from '@/constants/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'


type Props = {
    shownav:boolean
    close:()=>void
}

const Mobilenav = ({close,shownav}:Props) => {
  const navopen=shownav?"translate-x-0":"translate-x-[-100%]"
  return (
    <div>
      {/* {overlay} */}
      <div className={`fixed ${navopen} inset-0 transform transition-all duration-500 z-1006 bg-black opacity-70 w-full h-screen `}></div>
       <div className={`text-white ${navopen} fixed filex flex-col justify-center h-full transfrom  transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-500 space-y-3 z-1050`}>
        {
          navLinks.map((links)=>(
            <Link href={links.url} key={links.id}>
              <p className='relative font-medium w-fit text-[20px] ml-12 mt-7 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{links.label}</p>
            </Link>
          ))
        }
        <CgClose onClick={close} className=' absolute top-[0.7rem] right-[1.4rem] sm:w-6 sm:h-5 w-9 h-8'/>
       </div>
       {/* {close button} */}
       
    
     </div>
  )
}

export default Mobilenav
