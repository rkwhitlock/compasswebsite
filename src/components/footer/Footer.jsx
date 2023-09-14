import React from "react";

const linkList = [
  {
    itemName: "Faqs",
    link: "/",
  },
  {
    itemName: "Term & Conditions",
    link: "/",
  },
  {
    itemName: "Privacy Policy",
    link: "/",
  },
  {
    itemName: "Help",
    link: "/",
  },
  {
    itemName: "Affiliate",
    link: "/",
  },
  {
    itemName: "Services",
    link: "/",
  },
];

/*const Product = [
    {
      itemName: "Works",
      link: "/",
    },
    {
      itemName: "About",
      link: "/",
    },
    {
      itemName: "News",
      link: "/",
    },
    {
      itemName: "Contact",
      link: "/",
    },
    ];
*/


const Footer = () => {
  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <div className="ptf-widget ptf-widget-links has-black-color">
            
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;