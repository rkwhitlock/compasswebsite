import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderHomeDefault";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import PortfolioSix from "../../../components/portfolio/PortfolioSix";
import RelatedPortfolio from "../../../components/portfolio/RelatedPortfolio";

const WorksGrid = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--works-grid">
      <Helmet>
        <title>Moonex - Works/Portfolio Grid</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner margin_bottom_30">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <div className="ptf-page ptf-page--portfolio-grid">
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
                      <div className="container-y">

                        <div>
                          <h2 className="h1 large-heading">Contact Us</h2>
                          <h6 className="subheading">COMPASS@COMPASS.ORG</h6>
                        </div>

                        <div className='container-avg'>

                          <form className="container-inputs">

                            <div class="form-group">
                              <label for="exampleInputEmail1">Name *</label>
                              <div className="container-name-input">
                                <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First" />
                                <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last" />
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <div class="form-group">
                              <label for="exampleFormControlTextarea1">Text *</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Just expressing interest; have a project in mind; or any comments/questions, etc."></textarea>
                            </div>

                            <button type="submit" class="btn btn-secondary">Submit</button>
                          </form>

                          <div className="container-socials">
                            <div>
                              <h5>Instagram</h5>
                              <small>@compassinstitutionucsd</small>
                            </div>
                            <div>
                              <h5>Facebook</h5>
                              <small>@compassinstitutionucsd</small>
                            </div>
                            <div>
                              <h5>LinkedIn</h5>
                              <small>@compassinstitutionucsd</small>
                            </div>
                          </div>

                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

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

export default WorksGrid;
