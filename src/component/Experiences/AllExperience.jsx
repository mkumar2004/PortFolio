import React from 'react'
import SingleExperence from './SingleExperence'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from "../../FramerMotion/Variants";
const AllExperience = () => {
    const exp=[
        {
            job:'Front-End Developer',
            responsibilites:[
                'UI Development Build responsive, high-performance interfaces with React.js & Next.js.',
                'API Integration Connect frontend with GraphQL, REST APIs, and Firebase',
                'Responsive Design Ensure cross-browser & mobile-friendly UI with Tailwind CSS.'
            ]
        },
        {
            job:'Back-End Developer',
            responsibilites:[
                'Database Management Design and optimize databases using MongoDB, PostgreSQL, or Firebase.',
                'API Development Create secure RESTful and GraphQL APIs for seamless frontend integration.',
                'Performance Optimization Enhance server speed with caching, indexing, and load balancing.'
            ]
        },
        {
            job:'React-App Developer',
            responsibilites:[
                'Live demos, GitHub links, and case studies of your restaurant app & full-stack projects.',
                'End-to-end development with React, Python/Node.js, GraphQL, Firebase, and scalable solutions.',
                'Optimized, maintainable code with best practices, SSR, API caching, and CI/CD integration.'
            ]
        }
    ]
  
  return (
    <div className='mt-10' >
          <h2 className="text-orange text-center text-4xl" >My Expectation role</h2>
      <div className='flex md:flex-row sm:flex-col items-center justify-center  '>
        {
            exp.map((exper,index)=>{
                return (
                    <React.Fragment key={index}>
                        
                          <SingleExperence key={index} experr={exper} />;
                          <motion.div
                            variants={fadeIn('down',0.4)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{once:false,amount:0}}
                            
                          >
                            {index<2? (<FaArrowRight className='text-6xl text-orange lg:block sm:hidden' />):""}

                          </motion.div>
                          
                    </React.Fragment>
                )
            })
        }
      </div>
        
    </div>
  )
}

export default AllExperience