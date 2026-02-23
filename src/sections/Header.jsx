import React from 'react'
import ashiqicon from "../assets/ashiq.png";
const Header = () => {
  return (
    <div className="container flex flex-col items-center mx-auto px-4 py-16">
      <div className="flex justify-center items-center gap-6">
        <div className='flex flex-col'>

          <h1 className="text-2xl md:text-6xl font-bold text-gray-800 mb-4">Hi, I'm Ashiq 👋</h1>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Competitive Programmer <br /> MERN Stack Developer <br /> Operating System Enthusiastic
          </p>
        </div>
        <img src={ashiqicon} alt="Ashiq" className="rounded-full w-[8rem] border-4 border-black mb-8" />
      </div>
      <div className="text-gray-600 max-w-[43rem]">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p>
          After admiting myself in BSc in Mathematics in 2018, I lost my pace of study and gaining knowledge. Then I quit myself as a Mathematics student. In 2022 i got admited to CSE in City University. And Here I'm now, back in track to travel in Software Industry I'm also leading a competitive programming club - <a href="https://cpccu.club" className="text-blue-500 hover:underline">CPCCU</a>.
        </p>
      </div>
    </div>
  );
};


export default Header
