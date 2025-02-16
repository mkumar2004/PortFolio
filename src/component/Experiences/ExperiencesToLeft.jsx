import React from 'react'
import Inform from './Inform'

const ExperiencesToLeft = () => {
  return (
    <div className='flex flex-col  gap-6 w-[300px] '>
       <p className=' text-orange font-bold uppercase text-3xl font-special text-center' >Since 2022-25</p>
        <div className='flex justify-center items-center gap-4' >
          <Inform number='2' text='Years' />
          <p className='font-bold text-5xl text-lightbrown ' >-</p>
          <Inform number='15' text='Web-Platform'/>
        </div>
        <p className='text-center text-white' >Passionate about crafting engaging user experiences, I have worked on multiple projects leveraging React for web development and React Native for mobile applications, optimizing functionality and usability.</p>
       
    </div>
  )
}

export default ExperiencesToLeft