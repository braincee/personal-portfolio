import React from 'react';
import RecommendationCard from './RecommendationCard';
import Carousel from 'nuka-carousel/lib/carousel';
import data from './data';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const Recommendations = () => {

  let SlideToShowNumber = 1;

  const { ref, inView } = useInView();

  return (

    <div ref={ref}>
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
       >
      <div id='recommendations' className='max-w-[1240px] mx-auto px-2 py-20 mb-20 recommendations'>
        <div className="relative mb-20 grid grid-cols-2 items-center section">
      <div className="h-1 bg-yellow-600 mr-2"></div>
      <p className='relative inline-block text-3xl pl-2 text-yellow-600'>RECOMMENDATIONS</p>
    </div>
    <div className='m-auto px-10'>
    <Carousel
          className="pb-16"
          slidesToShow={SlideToShowNumber}
          slidesToScroll={1}
          swiping={false}
          wrapAround
          defaultControlsConfig={{
            nextButtonText: (
            <AiOutlineArrowRight />
            ),
            prevButtonText: (
             <AiOutlineArrowLeft />
            ),
            nextButtonStyle: {
              backgroundColor: '#FFCC22',
              borderRadius: '30px',
            },
            prevButtonStyle: {
              backgroundColor: '#FFCC22',
              borderRadius: '30px',
            },
            pagingDotsStyle: {
              fill: '#FFCC22',
              width: '50px',
            },
          }}
        >
        {data.map((recommendation) => (
         <RecommendationCard
         key={recommendation.id}
         name={recommendation.name}
         title={recommendation.title}
         image={recommendation.image}
         text={recommendation.text}
         link={recommendation.link}
        />
        ))} 

        </Carousel>
    </div>
    </div>
    </motion.div>
    </div>
  );

};

export default Recommendations;