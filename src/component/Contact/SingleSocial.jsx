import React from 'react'

const SingleSocial = ({Icon,link}) => {
  return (
    <div className='text-3xl h-3 w-9 border-orange text-orange rounded-full  flex items-center justify-center hover:text-white  transition-all duration-500 cursor-pointer'>
        <a href={link}  >
            <Icon />
        </a>
    </div>
  )
}

export default SingleSocial