import React from 'react'
import Left from './Left'
import Right from './Right'

const ContactMain = () => {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto items-center justify-center pt-4 mt-10'>
        <h2 className='text-6xl text-cyan mb-10 text-center'>Contact Me</h2>
        
        <div className='flex justify-between gap-24 bg-likbrown p-8 rounded-2xl lg:flex-row sm:flex-col' >
           <Left/>
           <Right/>
        </div>
        
    </div>
  )
}

export default ContactMain