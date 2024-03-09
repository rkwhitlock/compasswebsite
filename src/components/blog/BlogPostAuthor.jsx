import React from "react";
import SocialTwo from "../social/SocialTwo";

const BlogPostAuthor = () => {
  return (
    <div className="ptf-about-author">
      <div className="ptf-about-author__content">
        <div className="ptf-about-author__header">
          <h6>Celeste Walstrom-Vangor</h6>
          <span>Content Writor</span>
        </div>
        <div className="ptf-about-author__text">
          <p>
            Take a look at our{" "}
            <a
              className="text-decoration-underline has-accent-4"
              href="https://medium.com/@compassinstitution"
            >
              Medium Articles
            </a>{" "}
            !
          </p>
        </div>
        <div className="has-black-color blog-social">
          <SocialTwo />
          {/* <!--Social Icon--> */}
        </div>
      </div>
    </div>
  );
};

export default BlogPostAuthor;
