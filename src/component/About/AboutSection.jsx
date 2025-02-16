import React from 'react'
import AboutMe from './AboutMe'
import AboutMEPic from './AboutMEPic'
import { motion } from 'framer-motion';
import { fadeIn } from "../../FramerMotion/Variants";
const AboutSection = () => {
  return (
    <div 
     id='about'
    className='flex md:flex-row sm:flex-col gap-12 px-4 mx-auto mt-[100px] justify-between items-center' >
       <motion.div
         variants={fadeIn('right',0.4)}
         initial='hidden'
         whileInView='show'
         viewport={{once:false,amount:0}}
       >
        <AboutMe/>
       </motion.div>
      
       <motion.div
         variants={fadeIn('left',0.6)}
         initial='hidden'
         whileInView='show'
         viewport={{once:false,amount:0}}
       >
         <AboutMEPic/> 
       </motion.div>
      
    </div>
  )
}

export default AboutSection