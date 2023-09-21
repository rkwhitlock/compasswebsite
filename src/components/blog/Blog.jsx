import React from "react";
import { Link } from "react-router-dom";

const blogContent = [
  {
    img: "homesless2",
    cat: "Every Friday starting Week 1",
    title: "LOCAL PROJECT",
    description:`Focusing on the ongoing housing crisis in San Diego.  Working to build a math-powered application which will serve the specific needs of one 
    homeless organization. We are aiming to publish a short paper at the end of Spring 2023
    `
  },
  {
    img: "compass-1",
    cat: "BI-WEEKLY",
    date: "Oct 10, 2023",
    title: "COMPASS Webdev",
    description: ``,
  },
  {
    img: "earth-2",
    cat: "Every Tuesday starting Week 1",
    title: "GLOBAL PROJECT",
    description: `We are using climate, financial, and satellite data to predict famine in affected regions. We are conducting data-driven research to develop an intimate understanding of agricultural supply chains and their markets. Our learnings power in-house mathematical models which help us draw practical utility from our data.
    `,

  },
];

const Blog = () => {
  return (
    <>
      {blogContent.map((val, i) => (
        <div className="col-xl-4 col-lg-4" key={i}>
          <div className="grid-item filter-1 filter-4">
            {/* <!--Blog Post--> */}
            <article className="ptf-post ptf-post--style-4">
              <div className="ptf-post__media">
                <img
                  src={`assets/img/home/default/${val.img}.png`}
                  alt=""
                  loading="lazy"
                />
                <div className="ptf-post__media__content">
                  <header className="ptf-post__header">
                    <div className="ptf-post__meta">
                      <span className="cat">{val.cat}</span>
                      <span className="date">{val.date}</span>
                    </div>
                    <h3 className="ptf-post__title">{val.title}</h3>
                  </header>
                </div>
              </div>
              <div className="ptf-post__content">
                <header className="ptf-post__header">
                  <div className="ptf-post__meta">
                    <span className="cat">{val.cat}</span>
                    <span className="date">{val.date}</span>
                  </div>
                  <h3 className="ptf-post__title">
                    <Link to="/blog-details">{val.title}</Link>
                  </h3>
                </header>
                <div className="ptf-post__content">
                  <p>{val.description}</p>
                  <br/>
                  {/*<a><Link to="/blog-details">{"Learn More"}</Link></a>*/}
                </div>

                <footer className="ptf-post__footer">
                  <Link className="ptf-read-more-link" to="/blog-details">
                    Continue
                  </Link>
                </footer>
              </div>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
