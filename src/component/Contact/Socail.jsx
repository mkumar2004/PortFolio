import React from 'react'
import SingleSocial from './SingleSocial'
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
const Socail = () => {
  return (
    <div className='flex gap-4 '>
        <SingleSocial link='https://github.com/mkumar2004' Icon={FiGithub} />
        <SingleSocial link='https://www.linkedin.com/in/manojkumar-developer' Icon={CiLinkedin} />
        <SingleSocial link='https://www.instagram.com/m_kumar6874/' Icon={FaInstagram} />
    </div> 
  )
}

export default Socail