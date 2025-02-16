import React from 'react'
import ExperiencesToLeft from './ExperiencesToLeft'
import ExperienceTopRight from './ExperienceTopRight'
import Middle from './Middle'

const ExperiencesTop = () => {
  return (
    <div className='flex lg:flex-row sm:flex-col gap-10 items-center justify-center' >

        <ExperiencesToLeft/>
         <Middle/>
        <ExperienceTopRight/>

    </div>
  )
}

export default ExperiencesTop