import React from 'react'
import ConInfo from './ConInfo'
import Socail from './Socail'

const Right = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12' >
        <img src="../../public/email2.webp" alt="Contact Me" className='max-w-[330px]' />
    
      <ConInfo/>
      <Socail/>
    </div>
  )

}

export default Right