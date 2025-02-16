import React from 'react'
import Form from './Form'

const Left = () => {
  return (
    <div className='flex flex-col gap-8 w-full'  >
         <div>
            <h2 className='text-orange text-3xl mb-4 '>Get In Touch</h2>
            <p className='text-white'>Let’s create something amazing together! <br />
              I’m just a message away—contact me and let’s bring ideas to life. 
           
            </p>
         </div>
         <Form/>
    </div>
  )
}

export default Left