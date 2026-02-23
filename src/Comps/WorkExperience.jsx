import React from 'react';
import data from '../assets/data.json'; // Import the data

const WorkExperience = () => {
  const { experiences } = data[0]; // Destructure to get experiences from the first object in the data array

  return (
    <div className="md:container flex md:gap-3 md:max-w-[43rem] flex-col mx-auto md:px-4 py-5">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Work Experience</h2>

      {experiences.map((job, index) => (
        <div key={index} className="flex gap-5">
          <div className="mt-3">
            <img src={job.image} alt={`${job.company} Logo`} className="w-[10rem]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{job.company}</h3>
            <p className="text-gray-600">{job.title}</p>
            <p className="text-gray-600">{job.date}</p>
            <p className="text-gray-600">
              {job.responsibilities}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;