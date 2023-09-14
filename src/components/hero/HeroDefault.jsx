import React from "react";

const heroContent = {
  title: "",
  subTitle1: " ",
  subTitle2: "",
  subTitleDescription1: "Mathematical Modeling for Social Good",
  detailsDescription: "We're a student run organization partnering with local and international organizations to amplify their impact through mathematics, computer science and data science.",
};

const HeroDefault = () => {
  return (
    <div className="row">
      <div className="col-xl-9">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <h1 className="fz-230 fz-130--lg fz-90--md">{heroContent.title}</h1>
        </div>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "0.625rem" }}></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <p
            className="
                fz-40
                fw-bold
                lh-1p3
                text-uppercase
                has-white-color
              "
          >
            {heroContent.subTitle1} <br />
            {heroContent.subTitle2}
          </p>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{
            "--ptf-xxl": "8.125rem",
            "--ptf-md": "4.0625rem",
          }}
        ></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <h2
            className="h1 large-heading
                fz-70
                fz-40--md
                fw-light
                lh-1p1
                has-white-color
              "
          >
            {heroContent.subTitleDescription1} <br />
            {heroContent.subTitleDescription2}
          </h2>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{
            "--ptf-xxl": "9.375rem",
            "--ptf-md": "4.6875rem",
          }}
        ></div>
        <div className="row">
          <div className="col-xl-8">
            <div style={{ maxWidth: "545px" }}>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{
                    "--ptf-xxl": "4.375rem",
                    "--ptf-md": "2.1875rem",
                  }}
                ></div>
                <p className="fz-24 has-black-color">
                  {heroContent.detailsDescription}
                </p>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{
                  "--ptf-xxl": "6.875rem",
                  "--ptf-md": "3.4375rem",
                }}
              ></div>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                {/* <!--Button--> */}
                <a
                  className="ptf-btn ptf-btn--primary ptf-btn--inversed"
                  href="about-us.html"
                  target="_self"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 d-none d-xl-block">
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "3.75rem" }}></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          {/* <!--Mask Image--> */}
          
        </div>
      </div>
    </div>
  );
};

export default HeroDefault;
