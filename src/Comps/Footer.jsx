import React from 'react'
import { BiHome, BiLogoBlogger } from 'react-icons/bi'

import { PiXLogoBold } from 'react-icons/pi';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { PiYoutubeLogoBold } from 'react-icons/pi';
import { PiGithubLogoBold } from 'react-icons/pi';

const Footer = () => {
  return (
    <div className='fixed bottom-10 shadow-xl bg-zinc-100 backdrop-blur-sm rounded-2xl '>
      <div>
        <div className='flex gap-6 md:gap-10 p-1 border-4 rounded-2xl md:opacity-30 duration-200 hover:duration-300 hover:opacity-90'>
          <a href="" className='flex flex-col items-center justify-center'>
            <BiHome className='border rounded-full hover:bg-blue-200 border-black w-6 h-6 md:w-10 md:h-10 hover:scale-125 hover:transition-all hover:duration-500' />
            <p className='hidden md:block'>Home</p>
          </a>
          <a href="https://your-blog-link.com" className='flex flex-col items-center justify-center'>
            <BiLogoBlogger className='border rounded-full hover:bg-blue-200 border-black w-6 h-6 md:w-10 md:h-10 hover:scale-125 hover:transition-all hover:duration-500' />
            <p className='hidden md:block'>My Blogs</p>
          </a>
          <div className=' bg-black w-1'></div>
          <a href="https://github.com/mdsiaofficial" className='flex flex-col items-center justify-center'>
            <PiGithubLogoBold className='border rounded-full hover:bg-blue-200 border-black w-6 h-6 md:w-10 md:h-10 hover:scale-125 hover:transition-all hover:duration-500' />
            <p className='hidden md:block'>Github</p>
          </a>
          <a href="https://x.com/mdsiaofficial" className='flex flex-col items-center justify-center'>
            <PiXLogoBold className='border rounded-full hover:bg-blue-200 border-black w-6 h-6 md:w-10 md:h-10 hover:scale-125 hover:transition-all hover:duration-500' />

            <p className='hidden md:block'>X/Twitter</p>
          </a>
          <a href="https://linkedin.com/in/mdsiaofficial" className='flex flex-col items-center justify-center'>
            <PiLinkedinLogoBold className='border rounded-full hover:bg-blue-200 border-black w-6 h-6 md:w-10 md:h-10 hover:scale-125 hover:transition-all hover:duration-500' />
            <p className='hidden md:block'>LinkedIn</p>
          </a>
          <a href="https://youtube.com/@mdsiaofficial" className='flex flex-col items-center justify-center'>
            <PiYoutubeLogoBold className='border rounded-full hover:bg-blue-200 border-black w-6 h-6 md:w-10 md:h-10 hover:scale-125 hover:transition-all hover:duration-500' />
            <p className='hidden md:block'>Youtube</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
