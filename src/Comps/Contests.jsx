import React from 'react'
import data from '../assets/data.json'; // Import the data

const ContestCard = ({ title, date, location, description, logo, certificate }) => {
  return (
    <div className="md:container flex md:gap-3 md:max-w-[40rem] flex-col mx-auto md:px-4 py-5 bg-white rounded-lg shadow-xl p-6 m-4 ">
      <div className="flex items-center mb-4">
        <div className="w-[8rem] mr-4 shadow-xl">
          <img src={logo} alt={title} className="w-full h-full" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{date}</p>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
      <div className="w-fit mr-4 shadow-xl">
        
          {certificate?<img src={certificate?certificate:``} alt={title} className="w-full h-full" />: null}
        </div>
    </div>
  );
};

const Contests = () => {
  const { contests } = data[0]; // Destructure to get contests from the first object in the data array

  return (
    <div className="md:container flex md:gap-3 md:max-w-[43rem] flex-col mx-auto md:px-4 py-5 mb-10 md:mb-16">
      <div className="md:container flex md:gap-3 md:max-w-[43rem] flex-col mx-auto md:px-4 py-5">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">I love to take challenge</h2>
        <p className="text-gray-600 mb-4">
          Throughout my university journey, I participated in over 40 online and offline contests. Additionally, I'm proud to be leading as the president of our University Competitive Programming Club - 
          <a href="https://cpccu.club" className="text-blue-500 hover:underline"> CPCCU</a>.
        </p>
      </div>
      <div className="flex flex-wrap">
        {contests.map((contest, index) => (
          <ContestCard
            key={index}
            title={contest.title}
            date={contest.date}
            location={contest.location}
            description={contest.description}
            logo={contest.logo}
            certificate={contest.certificate}
          />
        ))}
      </div>
    </div>
  );
}

export default Contests
