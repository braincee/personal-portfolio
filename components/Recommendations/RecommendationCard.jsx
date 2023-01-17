import React from 'react';

const RecommendationCard = ({ name, title, image, text, link }) => {
    return (
      <div className="md:grid grid-cols-4 bg-[#1166b128] py-5 rounded-2xl">
        <div className="col-span-1 flex flex-col items-center ml-2">
          <img src={image} alt={name} className="rounded-full w-40 h-40" />
          <p className="text-xl font-semibold mt-2">{name}</p>
        </div>
        <div className="col-span-3 ml-4">
          <p className="text-2xl font-bold">{title}</p>
          <p>{text}</p>
          <div className="mt-5 mr-10 flex justify-end">
            <a href={link} className="fa-linkedin text-[#e0d7d7] text-xl" target="_blank" rel="noopener noreferrer justify-end">
           <button className='rounded-md bg-[#1167b1] h-10 w-20'>LinkedIn</button>
         </a>
      </div>
        </div>
    </div>
    );
  };
  
  export default RecommendationCard;