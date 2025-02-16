import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from "../../FramerMotion/Variants";
const Intro = () => {
  return (
    <div className="flex flex-col gap-2 h-full justify-center md:text-left sm:text-center " >
      <motion.h2 
      variants={fadeIn('down',0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once:false,amount:0}}
      className="lg:text-2xl sm:text-xl uppercase text-cyan " >Full-Stack Web Developer</motion.h2>
      <motion.h1
       variants={fadeIn('right',0.4)}
       initial='hidden'
       whileInView='show'
       viewport={{once:false,amount:0}}
      className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange" >Manojkumar V</motion.h1>
      <motion.p 
      variants={fadeIn('up',0.6)}
      initial='hidden'
      whileInView='show'
      viewport={{once:false,amount:0}}
      className=" text-lg mt-2 text-white " >A Passionate full-stack developer with 2-2.5 years<br />  of self-taught experience.</motion.p>
    </div>
  );
};

export default Intro;
