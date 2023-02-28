import React from 'react';
import visitImg from '../public/assets/projects/visit-ghana.png';
import calculatorImg from '../public/assets/projects/calculator.png';
import spaceImg from '../public/assets/projects/space-hub.png'
import juiceImg from '../public/assets/projects/juice-app.png'
import ProjectItem from './ProjectItem';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Projects = () => {

  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      <motion.div
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
       transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
      >
      <div id='projects' className='w-full mb-20 projects'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <div className="relative mb-20 grid grid-cols-2 items-center section">
          <div className="h-1 bg-yellow-600 mr-2"></div>
          <p className='relative inline-block text-3xl pl-2 text-yellow-600'>RECENT WORKS</p>
        </div>
        <div className='grid md:grid-cols-3 gap-8 max-w-[90%] mx-auto'>
          <ProjectItem
            title='Visit Ghana'
            backgroundImg={visitImg}
            projectUrl='/visit-ghana'
            Technology="JavaScript | NextJS"
          />
          <ProjectItem
            title='Calculator App'
            backgroundImg={calculatorImg}
            projectUrl='/calculator'
            Technology="React | JavaScript"
          />
          <ProjectItem
            title='Space Travellers Hub'
            backgroundImg={spaceImg}
            projectUrl='/space-hub'
            Technology="JavaScript | React JS"

          />
          <ProjectItem
            title='Juice APP'
            backgroundImg={juiceImg}
            projectUrl='/juice-app'
            Technology="React JS | Supabase"

          />
        </div>
      </div>
    </div>
      </motion.div>
    </div>
    
  );
};

export default Projects;
