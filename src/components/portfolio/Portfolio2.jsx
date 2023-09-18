import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const portfolioContent = [
  {
    img: "Intro - 1"
  },
  {
    img: "Intro - 2"
  },
  {
    img: "Intro - 3",
  },
  {
    img: "Recruitment Post V4.2",
  },
];

const Portfolio = () => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    centerPadding: "0",
    slidesToScroll: 1,
    autoplay: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="ptf-content-slider swiper-container slide-portfolio">
      <div className="swiper-wrapper">
        <Slider {...settings}>
          {/* <!--Portfolio Item--> */}
          {portfolioContent.map((item, i) => (
            <article className="ptf-work ptf-work--style-3" key={i}>
              <div className="ptf-work__media">
                <Link to="/works-showcase" className="ptf-work__link"></Link>
              <img
                  src={require(`../../assets/img/home/default/${item.img}.png`)}
                  
                  alt=""
                  loading="eager"
          />
              </div>
              <div className="ptf-work__meta">
                <div className="ptf-work__category">{item.categorie}</div>
                <h4 className="ptf-work__title">
                  <Link to="/works-showcase">{item.title}</Link>
                </h4>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
