import React from "react";

const approachContent = [
  {
    subTitle: "San Diego-based Organizations",
    descriptions: `Get in touch with our social media and message us via Instagram and LinkedIn.
    Send us an email through our Contact Us page for specific inquiries regarding potential collaborations.
    Check out our Local Project showcase to see how you can get involved in the community`,
    delayAnimation: "0",
  },

  {
    subTitle: "UCSD students",
    descriptions: `Attend our quarterly GBMs to see what we are all about.
    Apply to be a member of our club! Applications are open before week 4 of each academic quarter.
    Connect with our active members! We are more than willing to advise and converse with you on the steps necessary to become apart of the COMPASS family`,
    delayAnimation: "100",
  },
  {
    subTitle: "Donors",
    descriptions: `All the money raised goes directly back to research, student-led events, and helping those in need. Allocation of finances can be made available to donors as we have a transparent pipeline of where our money goes to. We appreciate every contribution! `,
    delayAnimation: "200",
  }
];

const Approach = () => {
  return (
    <div
      className="row"
      style={{
        "--bs-gutter-x": "3.75rem",
        "--bs-gutter-y": "7.5rem",
      }}
    >
      {approachContent.map((val, i) => (
        <div className="col-xl-4 col-lg-6" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            {/* <!--Approach Box--> */}
            <div
              className="ptf-approach-box"
              style={{
                "--ptf-title-color": "var(--ptf-color-white)",
              }}
            >
              <div className="ptf-approach-box__subtitle">{val.subTitle}</div>
              <h3 className="ptf-approach-box__title h1">{val.title}</h3>
              <div className="ptf-approach-box__content">
                <p>{val.descriptions}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Approach;
