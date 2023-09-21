import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Award from "../../components/award/Award";
import Blog from "../../components/blog/Blog";
import BlogOne from "../../components/blog/Blog_one"
import Brand from "../../components/brand/Brand";
import Counter from "../../components/counter/Counter";
import CopyRight from "../../components/footer/copyright/CopyRight";
import Footer from "../../components/footer/Footer";
import HeaderHomeDefault from "../../components/header/HeaderHomeDefault";
import HeroDefault from "../../components/hero/HeroDefault";
import Portfolio from "../../components/portfolio/Portfolio";
import Approach from "../../components/service/Approach";
import ServiceOne from "../../components/service/ServiceOne";
import Testimonial from "../../components/testimonial/Testimonial";

const HomeDefault = () => {
  return (
    <div className="ptf-site-wrapper animsition  ptf-is--home-default">
      <Helmet>
        <title>COMPASS - Home Default</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderHomeDefault />
      {/* End Header Default */}

      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-default">
            {/*=============================================
                Start Hero Section
              ============================================== */}
            <section className="has-accent-1-background">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7rem" }}
              ></div>
              <div className="container-xxl">
                <HeroDefault />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "6.25rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Service Section
              ============================================== */}
            

            {/*=============================================
                Start Portfolio Section
              ============================================== */}
               <section>
                
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="row"
                    style={{
                      "--bs-gutter-x": "3.75rem",
                      "--bs-gutter-y": "7.5rem",
                    }}
                  >
                    <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                  
                  </div>
                    <BlogOne />
                    <h2 className="h1 small-heading space-300 d-inline-flex margin-left-250">Here at COMPASS at UC San Diego, <br/> we have four key missions:</h2>
                    <p className="margin-left-500  space-300 d-inline-flex">
                    Create impactful career experiences for student members<br/> <br/> 
                    Assist local nonprofit organizations in the San Diego area using technical methods<br/><br/> 
                    Conducting research inquiries with the aim of fostering positive societal impact on a global scale<br/><br/> 
                    Create impactful career experiences for student members </p>
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="row"
                    style={{
                      "--bs-gutter-x": "3.75rem",
                      "--bs-gutter-y": "7.5rem",
                    }}
                  >
                    <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h2 className="h1 space-300 d-inline-flex">Our Projects</h2>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                  
                  </div>
                    <Blog />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
                End Blog Section
              ============================================== */}
          </div>
        </div>
        {/* End .ptf-main */}
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
                      <p className="margin-504">
                        Announcements & Events
                      </p>
                      <h2 className="h1 d-inline-flex margin-260">
                        Announcements
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
                    {/* <Link
                      className="
                          ptf-link-with-arrow
                          fz-18
                          text-uppercase
                          fw-semibold
                          has-black-color
                          d-none d-lg-inline-flex
                        "
                      to="/works-grid"
                      style={{ marginLeft: "5.625rem" }}
                    >
                      All Projects <i className="lnil lnil-chevron-right"></i>
                    </Link> */}
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
                  <Portfolio />
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "9.5rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Our Approach Section
              ============================================== */}
            <section
              className="has-accent-1-background"
             
            >
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1  space-180 d-inline-flex">Want to Make a Difference?</h2>
                  <p className="margin-250">HERE'S WHAT WE CAN DO FOR YOU</p>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": " 3.75rem" }}
                ></div>
                <Approach />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Brand and Counterup Section
              ============================================== */}
      

            
    
      <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

           <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container-xxl">
        <div className="row">
                <div className="col-xl-10">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h2 className="h1 large-heading space-400 d-inline-flex">Join our voyage</h2>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                  
                  </div>
                </div>
              </div>
              </div>
              </section>
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
    </div>
  );
};

export default HomeDefault;
