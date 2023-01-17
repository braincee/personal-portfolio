import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import calculatorImg from '../public/assets/projects/calculator.png';
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full mb-20'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <div className="relative mb-20 grid grid-cols-2 items-center">
          <div className="h-1 bg-[#9668f5] mr-2"></div>
          <p className='relative inline-block text-xl pl-2 md:text-3xl'>RECENT WORKS</p>
        </div>
        <div className='grid md:grid-cols-3 gap-8 max-w-[90%] mx-auto'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
          />
          <ProjectItem
            title='Calculator App'
            backgroundImg={calculatorImg}
            projectUrl='/calculator'
          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
