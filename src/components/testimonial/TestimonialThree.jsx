import React from "react";
import Slider from "react-slick";

const testimonialContent = [
  {
    descriptions: `Our mission at COMPASS, Community Oriented Mathematics Projects for Ambitious STEM Students, is to harness the power of mathematical modeling to address pressing societal challenges. We are dedicated to unearthing innovative solutions, eradicating corruption, and democratizing information for a more sustainable future, both locally and globally. With a commitment to diversity, equity, and inclusion, we empower underrepresented groups, advance the personal career goals of our members, and cultivate valuable STEM experiences for all participants. Through collaboration, research, and outreach, we aim to chart a course towards a better tomorrow.`,
    
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
