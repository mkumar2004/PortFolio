import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center' >
        <h2 className='text-6xl text-cyan mb-10' >About Me</h2>
        <p className='text-white ' >I’m Manojkumar,a self-taught full-stack web developer with 1 to 1.5 years  of experience building websites in React and apps in React Native.
        I create web solutions that solve real-world problems, handling both front-end and back-end development.
        Passionate about coding, I turn ideas into functional and efficient digital experiences.
        </p>
        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start text-white hover:text-cyan' >
          <a href="https://github.com/mkumar2004">My Project</a></button>

    </div>
  )
}

export default AboutMe