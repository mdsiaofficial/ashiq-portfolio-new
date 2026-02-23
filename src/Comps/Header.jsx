import React from 'react'
import ashiqicon from "../assets/ashiq.png";
import { PiXLogoBold } from 'react-icons/pi';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { PiYoutubeLogoBold } from 'react-icons/pi';
import { PiGithubLogoBold } from 'react-icons/pi';

const Header = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <nav className='flex justify-center items-center gap-12'>

        {/* title info */}
        <section className='flex flex-col'>
          <h1 className=' flex text-3xl font-bold
                        md:text-6xl md:font-extrabold '>
            Hi, I'm {`Ashiq`} <p className='hover:animate-bounce'>👋</p></h1>
          <h2 className='text-sm
                      md:text-lg md:font-semibold'>
            Competitive Programmer <br/>
            MERN Stack Developer <br />
            Operating System Enthusiastic<br />
          </h2>

        </section>

        {/* picture or logo */}
        <section className=''>
          <img src={ashiqicon} alt="Ashiq" className='w-[8rem] md:w-[10rem] h-auto rounded-full border-2 shadow-xl' />
        </section>
      </nav>
      <p className='text-base
                      md:text-base'><q>
          I love to solve problem's and analytical thinking</q></p>

      {/* social */}
      <div className='flex gap-10'>

        <a href="https://github.com/mdsiaofficial" className='flex flex-col items-center justify-center'>
          <PiGithubLogoBold className='border-2 rounded-full hover:bg-blue-200 border-black w-10 h-10 hover:scale-125 hover:transition-all hover:duration-500' />
          <p>Github</p>
        </a>
        <a href="https://x.com/mdsiaofficial" className='flex flex-col items-center justify-center'>
          <PiXLogoBold  className='border-2 rounded-full hover:bg-blue-200 border-black w-10 h-10 hover:scale-125 hover:transition-all hover:duration-500'/>

          <p>X/Twitter</p>
        </a>
        <a href="https://linkedin.com/in/mdsiaofficial" className='flex flex-col items-center justify-center'>
          <PiLinkedinLogoBold  className='border-2 rounded-full hover:bg-blue-200 border-black w-10 h-10 hover:scale-125 hover:transition-all hover:duration-500'/>
          <p>LinkedIn</p>
        </a>
        <a href="https://youtube.com/@mdsiaofficial" className='flex flex-col items-center justify-center'>
          <PiYoutubeLogoBold  className='border-2 rounded-full hover:bg-blue-200 border-black w-10 h-10 hover:scale-125 hover:transition-all hover:duration-500'/>
          <p>Youtube</p>
        </a>
      </div>
    </div>
  )
}

export default Header