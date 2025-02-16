import React from 'react'
import Intro from './Intro'
import Pic from './Pic'


const MainIntro = () => {
  return (
    <div className='pt-40 pb-15' >
        <div className='flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-2' >
          <Intro/>
          <Pic/>
        </div>
      
    
    </div>
  )
}

export default MainIntro