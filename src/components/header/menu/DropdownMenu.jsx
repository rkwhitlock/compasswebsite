import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  // {
  //   name: "Home",
  //   activeClass: "sf-with-ul",
  //   menuClass: "two-columns current-menu-item",
  //   path: "/home-default",
  // },
  {
    name: "About",
    activeClass: "",
    menuClass: "",
    path: "/About",
  },
  {
    name: "Meet the Team",
    path: "/Team",
  },
  {
    name: "Global Project",
    path: "/test",
  },
  {
    name: "Contact Us",
    activeClass: "",
    menuClass: "",
    path: "/ContactUs",
  },
  {
    name: "Join Us",
    path: "https://forms.office.com/Pages/ResponsePage.aspx?id=aRUEARuygkySi8oeAKYsqL8nynWLwLVDh1-QxJgaj6VUM1ZDRVlNWTA0Wk5VWFVNRlUwUzA5S1hJQy4u&embed=true",
    target: "_blank",
  },
];

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
      {menuContent.map((item, i) => (
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          {/* <a href="#" className={item.activeClass}>
            <span>{item.name}</span>
          </a> */}
          <Link to={item.path} target={item.target}>
            {" "}
            <span>{item.name}</span>
          </Link>

          {/* <ul className="sub-menu mega">
            {item.dropDownItems.map((val, i) => (
              <li key={i}>
                <Link to={val.routerPath}>
                  {" "}
                  <span>{val.name}</span>
                </Link>
              </li>
            ))}
          </ul> */}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
