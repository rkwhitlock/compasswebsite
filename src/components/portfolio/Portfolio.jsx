import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const portfolioContent = [
  {
    img: "work-1",
    categorie: "OCT 10, 2023",
    title: "COMPASS GBM",
  },
  {
    img: "work-2",
    categorie: "OCT 1, 2023",
    title: "Global Project Meeting 1",
  },
  {
    img: "sd-homeless-1",
    categorie: "OCT 3, 2023",
    title: "Local Project Meeting 1",
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
                <img
                  src={`assets/img/home/default/${item.img}.png`}
                  alt=""
                  loading="lazy"
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
