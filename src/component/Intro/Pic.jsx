import React from 'react'
import { BsHexagon } from "react-icons/bs";
import { motion } from 'framer-motion';
import { fadeIn } from "../../FramerMotion/Variants";
const Pic = () => {
  return (
    <motion.div 
     variants={fadeIn('left',0.6)}
     initial='hidden'
     whileInView='show'
     viewport={{once:false,amount:0}}
    className='h-full flex items-center justify-center mt-24 ' >
        <img src="/logo.jpeg" 
        alt="Manojkumar V"
        className='max-h-[380px] w-auto rounded-[380px]'
        />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse' >
        <BsHexagon className='md:h-[90%] sm:h-120%] min-h-[500px] w-auto text-orange blur-md animate-[spin_20s_linear_infinite]' />
        </div>
    </motion.div>
  )
}

export default Pic