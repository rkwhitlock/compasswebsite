import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../components/header/HeaderHomeDefault";
import CopyRight from "../../components/footer/copyright/CopyRight";
import Footer from "../../components/footer/Footer";
import TeamTwo from "../../components/team/TeamTwo";
import Portfolio from "../../components/portfolio/Portfolio";
import Portfolio2 from "../../components/portfolio/Portfolio2";
import Approach from "../../components/service/Approach";
import TestimonialThree from "../../components/testimonial/TestimonialThree";
import Brand from "../../components/brand/Brand";
import Counter from "../../components/counter/Counter";
import Testimonial from "../../components/testimonial/Testimonial";

const Team = () => {
  return (
    <div>
      <Helmet>
        <title>COMPASS - ABOUT</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--team">
        <section>
              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-12 col-md-9">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                       <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "9.5rem" }}
              ></div>
              <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": " 3.75rem" }}
                ></div>
                      <h2 className="h1 large-heading space-500 d-inline-flex">
                        COMPASS
                      </h2>
                      
                     
                      <p className="margin-130">COMMUNITY-ORIENTED MATHEMATICS PROJECTS FOR AMBITIOUS STEM STUDENTS</p>
                    </div>
                   
                  </div>
                  
                  <div className="col-12 col-md-3 text-md-end">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-md": "1.875rem" }}
                    ></div>
                    
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
                >
                  {/* <!--Content Slider--> */}
                  <Portfolio2 />
                  
                </div>
                
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5rem", "--ptf-md": "9.5rem" }}
              ></div>
              
              {/* <!--Spacer--> */}
              <p className="margin-90">We're a team of UCSD students passionate about integrating <b>math</b>, <b>technology</b>, <b>and human-centered design</b> to make a difference in the real world.</p>
                
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "9.5rem" }}
              ></div>
              
              
            </section>
            <div className="container-xxl">
            <h2 className="h1 large-heading space-300 d-inline-flex">
                        Our Mission
                      </h2>
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                   <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2rem", "--ptf-md": "5rem" }}
              ></div>
                  {/* <!--Content Slider--> */}
                  <div className="ptf-content-slider swiper-container">
                    {/* <!--Testimonial--> */}
                    <TestimonialThree/>
                  </div>
                </div>
                {/* End Testimonial */}
              </div>
           

              <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
              
                {/* End .row */}
                <div className="row">
                  <div className="col-12">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
                    ></div>
                    {/* <!--Divider--> */}
                    <div className="ptf-divider"></div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                    ></div>
                  </div>
                </div>
                {/* End .row */}

                <Counter />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
          {/*<!--jmm]
          ssasas
          <section>
            {/* <!--Spacer-->
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row">
                <div className="col-xl-10">
                  {/* <!--Animated Block--> 
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h2 className="h1 large-heading space-300 d-inline-flex">Meet the Team</h2>
                    {/* <!--Spacer--> 
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-24 margin-120">
                      Meet our talents team of creative, fun-lovers and magic
                      makers.
                    </p>
                  </div>
                </div>
              </div>
              {/* End .row 

              {/* <!--Spacer-->
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="ptf-team-member-grid">
                <TeamTwo />
              </div>
            </div>
            {/* <!--Spacer--> 
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section> --> */}
        </div>
      </div>

      {/*=============================================
        Start Footer
        ============================================== */}
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
  );
};

export default Team;
