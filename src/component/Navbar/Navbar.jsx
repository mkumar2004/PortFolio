import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [Menuopen,setMenuopen] = useState(false);
    const toggelMenu = ()=>{
        setMenuopen(!Menuopen);
    }
  return (
   
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex  mt-4' >
        <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-4 rounded-full border-[0.5px] border-orange' > 
          <NavbarLogo/>
          <div className={`${Menuopen ? "sm:block" : "sm:hidden"} lg:block`} >
          <NavbarLinks/>
          </div>
          
          <NavbarBtn/>
        </div>
        <div className='flex lg:hidden sm:block p-3 bg-black items-center justify-center rounded-full border-[0.5px] border-orange ml-2' >
         <button className='text-2xl p-2 border border-orange rounded-full text-white ' 
           onClick={toggelMenu}
         >
         <RxHamburgerMenu/>
         </button>
          
        </div>
    </nav>
  )
}

export default Navbar