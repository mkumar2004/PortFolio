import { list } from 'postcss'
import React from 'react'

const FooterMain = () => {
    const Links = [
        {link:"About Me",section:"about"},
        {link:"Skills",section:"skills"},
        {link:"Experience",section:"experience"},
        {link:"Project",section:"project"},
        {link:"Contact",section:"contact"},
    ]
  return (
    <div className='px-4 '>
        <div className='w-full h-[1px] bg-lightbrown mt-24'></div>
        <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto' >
            <p className='text-3xl text-lightbrown' >ManojKumar </p>
            <ul className='flex gap-4 text-lightgrey text-xl'>
                {Links.map((item,index)=>{
                    return (
                        <li key={index} > <a href="#" className='hover:text-white transition-all duration-500 cursor-pointer'  >{item.link}</a> </li>
                    )
                })}
            </ul>
        </div>
        <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightgrey' >® 2025 ManojKumar | All Rights Reserved. </p>
    </div>
  )
}

export default FooterMain