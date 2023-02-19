import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecommendationCard from './RecommendationCard';
import data from './data';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const Recommendations = () => {

  const { ref, inView } = useInView();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
  };

  return (

    <div ref={ref}>
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
       >
      <div id='recommendations' className='max-w-[1240px] mx-auto px-2 py-20 mb-20 recommendations'>
        <div className="relative mb-20 grid grid-cols-2 items-center section">
      <div className="h-1 bg-yellow-600 mr-2"></div>
      <p className='relative inline-block text-3xl pl-2 text-yellow-600'>RECOMMENDATIONS</p>
    </div>
    <div className='m-auto px-10'>
    <Slider {...settings}>
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
    </Slider>
    </div>
    </div>
    </motion.div>
    </div>
  );

};

export default Recommendations;