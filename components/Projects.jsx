import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import calculatorImg from '../public/assets/projects/calculator.png';
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full mb-20 projects'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <div className="relative mb-20 grid grid-cols-2 items-center section">
          <div className="h-1 bg-yellow-600 mr-2"></div>
          <p className='relative inline-block text-3xl pl-2 text-yellow-600'>RECENT WORKS</p>
        </div>
        <div className='grid md:grid-cols-3 gap-8 max-w-[90%] mx-auto'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
            Technology="React | Redux"
          />
          <ProjectItem
            title='Calculator App'
            backgroundImg={calculatorImg}
            projectUrl='/calculator'
            Technology="React | JavaScript"
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
