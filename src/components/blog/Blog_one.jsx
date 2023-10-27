import React from "react";
import { Link } from "react-router-dom";

const blogContent = [
  {
    img: "geisel2",
    
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
                  src={`assets/img/home/default/${val.img}.webp`}
                  alt=""
                  loading="lazy"
                />
                <div className="ptf-post__media__content">
                  <header className="ptf-post__header">
                    <div className="ptf-post__meta">
                      {/* <span className="cat">{val.cat}</span>
                      <span className="date">{val.date}</span> */}
                    </div>
                    <h3 className="ptf-post__title">{val.title}</h3>
                  </header>
                </div>
              </div>
              <div className="ptf-post__content">
                <header className="ptf-post__header">
                  <div className="ptf-post__meta">
                    {/* <span className="cat">{val.cat}</span>
                    <span className="date">{val.date}</span> */}
                  </div>
                  <h3 className="ptf-post__title">
                    <Link to="/blog-details">{val.title}</Link>
                  </h3>
                </header>
                <div className="ptf-post__excerpt">
                  <p>{val.description}</p>
                </div>
                {/* <footer className="ptf-post__footer">
                  <Link className="ptf-read-more-link" to="/blog-details">
                    Continue
                  </Link>
                </footer> */}
              </div>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
