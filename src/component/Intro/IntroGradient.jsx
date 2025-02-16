import React from 'react'

const IntroGradient = () => {
  return (
    <div>
      <div className='shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse' ></div>
      <div className='shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse' ></div>
      <div className='shadow-cyanMediumShadow  absolute top-[300px] left-0 -z-10 opacity-80  ' ></div>
      <div className='shadow-orangeMediumShadow  absolute top-[500px] left-0 -z-10 opacity-80  ' ></div>
    </div>
  )
}

export default IntroGradient