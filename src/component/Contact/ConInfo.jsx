import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Singleinf from './Singleinf';
const ConInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white font-extralight' >
        <Singleinf text='mkumarrrr22@gmail.com' Image={MdEmail} />
        <Singleinf text='6374695178' Image={IoLogoWhatsapp} />
        <Singleinf text='Madurai' Image={FaLocationDot} />
    </div>
  )
}

export default ConInfo