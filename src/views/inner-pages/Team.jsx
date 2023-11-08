import React from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import { Helmet } from "react-helmet";
import HeaderHomeDefault from "../../components/header/HeaderHomeDefault";
import CopyRight from "../../components/footer/copyright/CopyRight";
import Footer from "../../components/footer/Footer";
import Portfolio from "../../components/portfolio/Portfolio";
import { Gallery, Item } from "react-photoswipe-gallery";

const board = [
  {
    img: "asoumah",
    cat: "Alejandro Soumah",
    date: "Global Project",
    title: "President",
    description: ``,
  },
  {
    img: "tchoi",
    cat: "Taerim Choi",
    date: "Board",
    title: "Vice President Operations",
    description: ``,
  },
  {
    img: "mperona",
    cat: "Matteo Perona",
    date: "Local Project",
    title: "Vice President Technical",
    description: ``,
  },
  {
    img: "syamala",
    cat: "Shruti Yamala",
    date: "Board",
    title: "VP Operations Intern",
    description: ``,
  },
  {
    img: "mishimoto",
    cat: "Madeline Ishimoto",
    date: "Board",
    title: "Head Secretary",
    description: ``,
  },
  {
    img: "rwhitlock",
    cat: "Reese Whitlock",
    date: "Global Project & Web Development",
    title: "Frontend Dev & Chief Engineer",
    description: ``,
  },
  {
    img: "tding",
    cat: "Tammy Ding",
    date: "Design",
    title: "Head Designer",
    description: ``,
  },
  {
    img: "jguzman",
    cat: "Joseph Guzman",
    date: "Board",
    title: "Lead Financial Officer",
    description: ``,
  },
  {
    img: "zhasan",
    cat: "Zoya Hasan",
    date: "Board",
    title: "Director of Communications",
    description: ``,
  },
  {
    img: "kyu",
    cat: "Kevin Yu",
    date: "Global Project",
    title: "Software Engineer & Managing Events Coordinator",
    description: ``,
  },
];

const global = [
  {
    img: "hsingh",
    cat: "Hartej Singh",
    date: "Global Project",
    title: "Quantitative Analyst",
    description: ``,
  },
  {
    img: "hwang",
    cat: "Harry Wang",
    date: "Global Project",
    title: "Quantitative Modeling Engineer",
    description: ``,
  },
  {
    img: "adevineni",
    cat: "Anish Devineni",
    date: "Global Project",
    title: "Engineer",
    description: ``,
  },
];

const local = [
  {
    img: "mprasad",
    cat: "Maanasa Prasad",
    date: "Local Project",
    title: "Software Engineer",
    description: ``,
  },
  {
    img: "dpark",
    cat: "Daniel Park",
    date: "Local Project",
    title: "Data Scientist",
    description: ``,
  },
  {
    img: "tpham",
    cat: "Tracy Pham",
    date: "Local Project",
    title: "Data Scientist",
    description: ``,
  },
  {
    img: "ama",
    cat: "Adalina Ma",
    date: "Local Project",
    title: "Data Engineer",
    description: ``,
  },
];

const dnd = [
  {
    img: "ekim",
    cat: "Elise Kim",
    date: "Design",
    title: "Lead Designer",
    description: ``,
  },
  {
    img: "arubin",
    cat: "Ava Rubin",
    date: "Web Development",
    title: "UX/UI Designer",
    description: ``,
  },
  {
    img: "knguyen",
    cat: "Khoi Nguyen",
    date: "Design",
    title: "UX/UI & Marketing/Brand Designer",
    description: ``,
  },
];

const sections = [
  { title: "Board", pictures: board },
  { title: "Global Project", pictures: global },
  { title: "Local Project", pictures: local },
  { title: "Design & Web Development", pictures: dnd },
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
};

const WorksCarousel = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--works-carousel">
      <Helmet>
        <title>COMPASS - Team</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderHomeDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <div className="ptf-page ptf-page--portfolio-carousel">
            {/*=============================================
                End Portfolio Section
              ============================================== */}
            <section>
              {/* spacer */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-12 col-md-9">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading d-inline-flex">
                        Meet the Team
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-md-3 text-md-end">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-md": "1.875rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem" }}
                ></div>
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                ></div>
              </div>
              <div>
                {sections.map((item) => (
                  <div>
                    {" "}
                    <div className="container-xl">
                      <div className="col-12 col-md-9">
                        <h2 className=" h1 small-heading d-inline-flex">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2rem", "--ptf-md": "2rem" }}
                    ></div>
                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className="my-masonry-grid"
                      columnClassName="my-masonry-grid_column"
                    >
                      {item.pictures.map((item, i) => (
                        <div className="grid-item" key={i}>
                          <article className="ptf-post ptf-post--style-2">
                            <div className="ptf-post__media">
                              <img
                                src={`assets/img/team/COMPASS HEADSHOTS/${item.img}.jpg`}
                                alt=""
                                loading="lazy"
                              />
                              <div className="ptf-post__media__content">
                                <header className="ptf-post__header">
                                  <div className="ptf-post__meta">
                                    <span className="cat">{item.cat}</span>
                                    <span className="date">{item.date}</span>
                                  </div>
                                  <h3 className="ptf-post__title">
                                    {item.title}
                                  </h3>
                                </header>
                              </div>
                            </div>
                            {/* End .ptf-post */}
                            <div className="ptf-post__content">
                              <header className="ptf-post__header">
                                <div className="ptf-post__meta">
                                  <span className="cat">{item.cat}</span>
                                  <span className="date">{item.date}</span>
                                </div>
                                <h3 className="ptf-post__title">
                                  {item.title}
                                </h3>
                              </header>
                              <div className="ptf-post__excerpt">
                                {item.description}
                              </div>
                              <footer className="ptf-post__footer"></footer>
                            </div>
                            {/* End .ptf-post__content */}
                          </article>
                        </div>
                      ))}
                    </Masonry>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2rem", "--ptf-md": "2rem" }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "9rem" }}
              ></div>
            </section>
          </div>
          {/* End .ptf-page */}
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
    // End .ptf-is--blog-grid
  );
};

export default WorksCarousel;

//export default BlogMasonryGrid;
