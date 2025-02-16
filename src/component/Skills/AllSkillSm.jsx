import React from 'react' 
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSanity } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import SingleSkill from './SingleSkill';
import { motion } from 'framer-motion';
import { fadeIn } from "../../FramerMotion/Variants";
const skills = [
    {
        skill:'HTML5',
        icon:FaHtml5,
    },
    {
        skill:'JavaScript',
        icon:TbBrandJavascript,
    },
    {
        skill:'TailwindCSS',
        icon:SiTailwindcss,
    },
    {
        skill:'React',
        icon:TbBrandReact,
    },
    {
        skill:'Python',
        icon:FaPython,
    },
    {
        skill:'Java',
        icon:FaJava,
    },
    {
        skill:'MongoDB',
        icon:SiMongodb,
    },
    {
        skill:'Mysql',
        icon:SiMysql,
    },
    {
        skill:'Sanity',
        icon:SiSanity,
    },
    {
        skill:'Firebase',
        icon:IoLogoFirebase,
    },
]

const AllSkillSm = () => {
  return (
    <div className=' grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12' >
        {skills.map((item,index)=>{
            return(
              <motion.div 
               variants={fadeIn('up',0.7)}
               initial='hidden'
               whileInView='show'
               viewport={{once:false,amount:0}}
              key={index} className='flex flex-col items-center'  > 
                  <item.icon className='text-7xl text-orange ' />
                   <p className=' text-center mt-4 text-white' >{item.skill}</p>
              </motion.div>
            ); 
        })}
    </div>
  )
}

export default AllSkillSm 