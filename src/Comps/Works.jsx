import React from 'react'
import WorkCard from './WorkCard'

const Works = () => {
  return (
    <div className='flex flex-col my-10 md:w-[42rem]'>

      {/* Title */}
      <section className='text-center max-w-[43rem]'>
        <h1 className='text-xl font-semibold
                      md:text-3xl md:font-semibold'>Experiences</h1>
      </section>

      <section className='my-3'>
        <WorkCard />
      </section>
    </div>
  )
}

export default Works