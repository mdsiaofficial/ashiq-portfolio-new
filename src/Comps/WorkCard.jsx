import React from 'react'
import atom from "../assets/atomic.png";
const WorkCard = () => {
  return (
    <div className='flex gap-3 max-w-[43rem]'>
      {/* logo */}
      <section>
        <img src={atom} alt="" className='w-[16rem] md:w-[9rem]'/>
      </section>
      {/* info */}
      <section className='flex flex-col'>
        <div className='flex justify-between'>
          <nav>
            <h1 className='text-xl'>Company Name</h1>
            <h2  className='text-lg'>Front End</h2>
          </nav>

          <nav>
            Jan 2019 - Feb 2021
          </nav>
        </div>

        <div>
          <p  className='text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aperiam non expedita voluptatem ipsum ea quod pariatur quae voluptates assumenda nobis reiciendis eveniet officia vel obcaecati, exercitationem accusamus omnis. Sapiente?
          </p>
        </div>
      </section>
    </div>
  )
}

export default WorkCard