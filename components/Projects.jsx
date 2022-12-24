import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import calculatorImg from '../public/assets/projects/calculator.png';
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest text-[#5651e5]'>
          PROJECTS
        </p>
        <h2 className='py-4'>Recent Work</h2>
        <div className='grid md:grid-cols-1 gap-8 max-w-[50%] mx-auto'>
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
