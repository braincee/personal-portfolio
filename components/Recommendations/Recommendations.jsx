import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecommendationCard from './RecommendationCard';
import data from './data';


const Recommendations = () => {
  const settings = {
    dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        arrows: false,
  };

  return (

    <div>
      <div id='recommendations' className='max-w-[1240px] mx-auto px-2 py-20 mb-20'>
        <div className="relative mb-20 grid grid-cols-2 items-center">
      <div className="h-1 bg-[#9668f5] mr-2"></div>
      <p className='relative inline-block text-3xl pl-2'>RECOMMENDATIONS</p>
    </div>
    <div className='relative m-auto ml-10 px-10 md:max-w-[95%] md:m-auto'>
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
    </div>
  );

};

export default Recommendations;