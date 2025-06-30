import React from 'react'

type Props = {
    titel:string
}

const Footercard = ({titel}: Props) => {
  return (
    <div>
        <h1 className='mt-4 tracking-[0.2rem] text-sm font-semibold text-gray-900 '>{titel}</h1>
    </div>
  )
}

export default Footercard