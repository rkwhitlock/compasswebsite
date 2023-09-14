import React from "react";

const socialList = [
  {
    iconName: "socicon-linkedin",
    link: "https://www.linkedin.com/company/compass-institution",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/ucsdcompass/",
  },
]

const SocialTwo = () => {
  return (
    <>
      {socialList.map((val, i) => (
        <a
          className="ptf-social-icon ptf-social-icon--style-1"
          target="_blank"
          rel="noopener noreferrer"
          href={val.link}
          key={i}
        >
          <i className={val.iconName}></i>
        </a>
      ))}
    </>
  );
};

export default SocialTwo;