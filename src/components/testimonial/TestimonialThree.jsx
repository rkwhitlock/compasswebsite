import React from "react";
import Slider from "react-slick";

const testimonialContent = [
  {
    descriptions: `In Spring of 2022... [insert ale, terrys and matteo's story] ... a mutual passion which sewed the seeds for broadening into a campus club.
    COMPASS is a channel through which personal interest can be applied towards a greater cause, made accessible to any driven student who wants to see change.
    
    Our mission is to ... Projects such as [x] and [y]`,
    
  }
  
];

const TestimonialThree = () => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <>
      <Slider
        {...settings}
        className="arrow-none testimonial-pagination--style-bottom"
      >
        {testimonialContent.map((val, i) => (
          <div
            className="ptf-testimonial ptf-testimonial--style-1 space-80"
            key={i}
          >
            <div className="ptf-testimonial__content">
              <p>{val.descriptions}</p>
            </div>
            
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TestimonialThree;
