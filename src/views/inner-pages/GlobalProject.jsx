import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import BlogComment from "../../components/blog/BlogComment";
import BlogCommentForm from "../../components/blog/BlogCommentForm";
import BlogPostAuthor from "../../components/blog/BlogPostAuthor";
import RelatedPost from "../../components/blog/RelatedPost";
import CopyRight from "../../components/footer/copyright/CopyRight";
import Footer from "../../components/footer/Footer";
import HeaderDefault from "../../components/header/HeaderHomeDefault";
import ImageGridTwo from "../../components/image-grid/ImageGridTwo";
import SocialFour from "../../components/social/SocialFour";

const GlobalProject = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>COMPASS - Global Project</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <article className="ptf-single-post">
            {/* <!--Post Header--> */}
            <header className="ptf-single-post__header ptf-single-post__header--style-1">
              <h1>Global Project</h1>
            </header>

            {/* <!--Post Wrapper--> */}
            <div className="">
              <div className="container-l">
                <div className="row">
                  <div className="col-xl-8 offset-xl-2">
                    {/* <!--Post Excerpt--> */}
                    <div
                      className="ptf-single-post__header ptf-single-post__header--style-1"
                      style={{ textAlign: "center", marginTop: "-16rem" }}
                    >
                      <h3>A Prediction of Rice Prices in India</h3>{" "}
                    </div>
                    {/* Sub Heading */}
                    <h4 style={{ textAlign: "center", marginTop: "-4rem" }}>
                      COMPASS Institution at UC San Diego
                    </h4>

                    {/* <!--Post Content--> */}
                    <div
                      className="ptf-single-post__content"
                      style={{ textAlign: "center", marginTop: "2rem" }}
                    >
                      <p>
                        We are the global project branch of COMPASS! We are
                        working with international organizations to predict food
                        insecurity by creating mathematical models with
                        quantitative data. Ultimately, we will build a world
                        heat map which will predict food insecurity using real
                        time data partnered with data from our predictive
                        models.
                      </p>

                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                      ></div>

                      <ImageGridTwo />

                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                      ></div>

                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{
                          "--ptf-xxl": "6.25rem",
                          "--ptf-md": "3.125rem",
                        }}
                      ></div>
                      {/* <!--Twitter Review--> */}
                      <div className="ptf-twitter-review ptf-twitter-review--style-2">
                        <div className="ptf-twitter-review__header">
                          <div className="ptf-twitter-review__avatar">
                            <img
                              src="assets/img/root/twitter-avatar.png"
                              alt="avatar"
                              loading="lazy"
                            />
                          </div>
                          <div className="ptf-twitter-review__meta">
                            <h6 className="ptf-twitter-review__author">
                              ALEJANDRO SOUMAH
                            </h6>
                            <div className="ptf-twitter-review__info">
                              <a href="#">Global Project President</a> - Dec
                              2022
                            </div>
                          </div>
                          <div className="ptf-twitter-review__icon"></div>
                        </div>
                        <div className="ptf-twitter-review__content">
                          <p>The Global Project played a pivotal role in defining COMPASS and its essence, establishing the organization on the principles of using advanced mathematical modeling to tackle the global challenges. This mission, inherently noble, not only laid the foundation for COMPASS but also stands as the quintessential embodiment of its objectives.</p>
                        </div>
                      </div>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                      ></div>
                      <h3>OUR MISSION</h3>

                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{
                          "--ptf-xxl": "1.875rem",
                          "--ptf-md": "1.5625rem",
                        }}
                      ></div>
                      <p>
                        Our mission in the global project of COMPASS, is to
                        develop a prediction-based food insecurity heatmap for
                        the north east region of Bihar, India influenced by the
                        World Food Programme HungerMap. Eventually, we hope to
                        be able to expand this heatmap and predict food
                        insecurity around the world. There are three branches of
                        the global project: data analysts, quantitative math
                        modelers, and software engineers. Currently, the data
                        scientists are working to utilize real-time, pricing,
                        reference, time series, and machine-readable content to
                        extract the future prices of rice and wheat. They then
                        send that data to the mathematical model made by the
                        quantitative model team to generate real time
                        predictions as well as make any adjustments needed so it
                        can provide accurate price predictions in real-time. The
                        software engineers are working on making a website that
                        uploads the data from the other branches to a
                        comprehensive heatmap. The end goal of the project is to
                        have collected the data, organize it, and then upload it
                        to a map that uses current data to predict food
                        insecurity around the world.
                      </p>
                      <ul style={{ lineHeight: "2" }}>
                        <li>Clean the data into reable datasets</li>
                        <li>
                          Create linear regressions to forcast food insecurity
                        </li>
                        <li>Render the data onto a real-time heatmap</li>
                      </ul>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.875rem" }}
                      ></div>
                      <p>
                        Take a took at what we have{" "}
                        <a
                          className="text-decoration-underline has-accent-4"
                          href="https://globalprojectwebsite.azurewebsites.net/"
                        >
                          so far
                        </a>{" "}
                        .
                      </p>
                    </div>

                    {/* <!--Post Footer--> */}
                    <footer className="ptf-single-post__footer">
                      {/* <!--Post Tags--> */}
                      <div className="ptf-post-tags">
                        <a href="#">Global Project Top</a>
                      </div>
                      {/* <!--Post Socials--> */}
                      <div className="ptf-post-socials">
                        <span>Share on</span>
                        <SocialFour />
                      </div>
                    </footer>

                    {/* <!--About Author--> */}
                    <BlogPostAuthor />
                    {/* End .ptf-about-author */}

                    {/* <!--Comments--> */}
                    <section className="ptf-page-comments">
                      {/* <!--Comments form--> */}
                      <div className="ptf-page-comments__form">
                        <h2 className="ptf-page-comments__title">
                          Leave a comment:
                        </h2>
                        <BlogCommentForm />
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </article>
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
  );
};

export default GlobalProject;
