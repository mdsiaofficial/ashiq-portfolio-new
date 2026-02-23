import React from 'react'
import data from '../assets/data.json'
const Education = () => {
  const { education } = data[0]; // Corrected to get education from the first object in the data array
  return (
    <div className="md:container flex md:gap-3 md:max-w-[43rem] flex-col mx-auto md:px-4 py-5 mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Education</h2>

      <section className=' my-3 flex flex-col gap-8'>
        {
          education.map((edu, index) => (
            <div key={index} className=' flex justify-between items-center gap-5'> 
              <div className='flex flex-col'>
                <h1  className='text-base italic md:text-lg lg2:text-xl text-[#bd3053]'>{edu.program}</h1>
                <h1 className='text-xl '>{edu.uni}</h1>
                {edu.result && <p>CGPA: {edu.result}</p>}
              </div>
              <div>
                <p>{edu.year}</p>
              </div>
            </div> 
          ))
        }
      </section>
    </div>
  )
}

export default Education