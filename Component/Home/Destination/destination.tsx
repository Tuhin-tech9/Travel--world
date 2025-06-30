import Section from '@/Component/Helper/Section'
import React from 'react'
import DestinationSlider from './DestinationSlider'

type Props = {}

const  Destination = (props: Props) => {
  return (
    <div className='pt-20 pb-20'> 
    <Section/>
    {/* {section content} */}
    <div className='mt-14 w-[80%] mx-auto'>
      <DestinationSlider/>

    </div>
    </div>
  )
}

export default  Destination