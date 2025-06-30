import Sectionfooter from '@/Component/Helper/Sectionfooter'
import React from 'react'
import Footercard from './Footercard'
import { MdPriceChange } from "react-icons/md";
import { BsBookmarkPlus } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { TiSocialInstagram } from "react-icons/ti";



// type Props = {
    
// }

const Footer = () => {
  return (
    <div className='pt-16 pb-24'   >
        <Sectionfooter/>
        <div  className='grid w-[80%] grid-cols-1 mx-auto gap-16 items-center mt-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
               <MdPriceChange size={90} className='text-blue-500 rounded-lg hover:scale-110 ml-10' />   <Footercard titel="best price guraanted"/>
            </div>
              <div data-aos="fade-up" data-aos-anchor-placement="top-center" >
                 <BsBookmarkPlus size={80} className='text-blue-500 rounded-lg hover:scale-110 ml-10' />
 <Footercard titel="Easy and quick booking"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" >
               <RiCustomerService2Line size={80} className='text-blue-500 rounded-lg hover:scale-110 ml-10'  />
   <Footercard titel="Customer care 24/7"/>
            </div>
              <div data-aos="fade-up" data-aos-anchor-placement="top-center" >
              <TiSocialInstagram size={80} className='text-blue-500 rounded-lg hover:scale-110 ml-10' />
   <Footercard titel="We are avalible on Social media"/>
            </div>
        </div>
      
    </div>
  )
}

export default Footer