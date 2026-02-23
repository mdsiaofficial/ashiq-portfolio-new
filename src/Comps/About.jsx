import React from 'react'
import data from "../assets/data.json"

const About = () => {
  const { basicInfo } = data[0]; // Destructure to get basicInfo from the first object in the data array

  return (
    <div className='flex flex-col justify-center md:mx-4  my-10'>

      {/* Title */}
      <section className='text-left'>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About</h2>
      </section>

      <section className='max-w-[43rem]'>
        <p>
          {basicInfo.about}
        </p>
        <p>I'm also leading a competitive programming club - <a href="https://cpccu.club" className="text-blue-500 hover:underline">CPCCU</a>.</p>
      </section>
    </div>
  )
}

export default About