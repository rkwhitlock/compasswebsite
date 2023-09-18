import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const portfolioContent = [
  {
    img: "agriculture1",
    categorie: "OCT 10, 2023",
    title: "THE COMPASS GBM",
  },
  {
    img: "agriculture1",
    categorie: "Weekly - starting OCT 1, 2023",
    title: "GLOBAL PROJECT MEETING",
  },
  {
    img: "agriculture1",
    categorie: "Weekly - starting OCT 3, 2023",
    title: " LOCAL PROJECT MEETING",
  },
];

const Portfolio = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    centerPadding: "0",
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
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
              {/*  <img
                  src={require(`../../assets/img/home/default/${item.img}.jpg`)}
                  alt=""
                  loading="eager"
          />*/}
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
