import React from 'react'
import { Link } from 'react-scroll'

const Links = [
    {link:"About Me",section:"about"},
    {link:"Skills",section:"skills"},
    {link:"Experience",section:"experience"},
    {link:"Project",section:"project"},
    {link:"Contact",section:"contact"},
]
const NavbarLinks = () => {
  return (
    <ul className='flex gap-4 text-white text-center font-bold py-2 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[50%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 blackdrop-blur-lg lg:bg-black sm:w-full mt-4  ' >
        {Links.map((link,index)=>{
            return(
                <li key={index} className='group' >
                 <Link
                   to={link.section}
                   smooth={true}
                   spy={true}
                   duration={500}
                   offset={-130}
                   
                   className='cursor-pointer text-white hover:text-cyan transition-all duration-500 ' >{link.link}
                 </Link>
                 <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500' ></div>
                </li>
            )
        })}
    </ul>
  )
}

export default NavbarLinks