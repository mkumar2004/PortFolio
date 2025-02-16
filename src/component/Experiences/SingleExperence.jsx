import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from "../../FramerMotion/Variants";
const SingleExperence = ({ experr }) => {
  return (

     
      <motion.div 
       variants={fadeIn('right',0.8)}
       initial='hidden'
       whileInView='show'
       viewport={{once:false,amount:0}}
      className="md:h-[340px] md:w-[340px]  sm:h-auto sm-auto border-2 border-orange border-dashed rounded-2xl mt-12 p-4  " >
       <p className="font-bold text-cyan " >{experr.job}</p>
       
       <ul className="list-disc mt-4 pl-4 text-white" >{experr.responsibilites.map((res,index)=>{
        return <li key={index} >{res}</li>
       })}</ul>

      </motion.div>
    
  );
};

export default SingleExperence;
