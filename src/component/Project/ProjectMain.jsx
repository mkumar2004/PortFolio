import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import { motion } from 'framer-motion';
import { fadeIn } from "../../FramerMotion/Variants";
const ProjectMain = () => {

  const project =[
    {
        name:'Food Ordering App',
        year:'Dec2024',
        align:'right',
        image:'/fd.webp',
        link:'https://github.com/mkumar2004/Foodie-mail.git'
    },
    {
        name:'MediSafe',
        year:'Jan2025',
        align:'left',
        image:'/fd2.webp',
        link:'https://github.com/mkumar2004/MediSafe-Tracker.git'
    },
    {
        name:'Food Restaurant App',
        year:'Feb2025',
        align:'right',
        image:'/fd3.webp',
        link:'https://github.com/mkumar2004/Restaruant-App.git'
    },
    
]  
 
return (
    <div id='project' className='max-w-[1200px] mx-auto px-4' >
        <motion.div
         variants={fadeIn('up',0.4)}
         initial='hidden'
         whileInView='show'
         viewport={{once:false,amount:0}}
        >
          <ProjectText/>
        </motion.div>
       
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12' >
            {
                project.map((item,index)=>{
                    return <SingleProject key={index} name={item.name} image={item.image} align={item.align}  year={item.year}  link={item.link} />
                })
            }
       
            
        </div>
    </div>
  )
}

export default ProjectMain