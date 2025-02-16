import React from 'react'
import ExperienceText from './ExperienceText'
import ExperiencesTop from './ExperiencesTop'
import AllExperience from './AllExperience'
import { motion } from 'framer-motion';
import { fadeIn } from "../../FramerMotion/Variants";
const ExperienceMain = () => {
  return (
    <div id='experience' className='mx-auto px-4' >
        <motion.div
          variants={fadeIn('down',0.4)}
          initial='hidden'
          whileInView='show'
          viewport={{once:false,amount:0}}
        >
        <ExperienceText/>
        </motion.div>
      
        <motion.div
            variants={fadeIn('up',0.8)}
            initial='hidden'
            whileInView='show'
            viewport={{once:false,amount:0}}
        >
        <ExperiencesTop/>
        </motion.div>
        
        
        <div className=' w-full h-1 mt-4 bg-lightbrown lg:block sm:hidden ' ></div>
        <AllExperience/>
    </div>
  )
}

export default ExperienceMain