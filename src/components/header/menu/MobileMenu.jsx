import React from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Social from "../../social/Social";

const menuContent = [
  {
    name: "Home",
    path: "/home-default", // needs to be changed
  },
  {
    name: "About Us",
    path: "/About", // needs to be changed
  },
  {
    name: "Meet the Team",
    path: "/Team",
  },
  {
    name: "Contact Us",
    path: "/ContactUs", // needs to be changed
  },
  {
    name: "Join Us",
    path: "https://forms.office.com/Pages/ResponsePage.aspx?id=aRUEARuygkySi8oeAKYsqL8nynWLwLVDh1-QxJgaj6VUM1ZDRVlNWTA0Wk5VWFVNRlUwUzA5S1hJQy4u&embed=true",
    target: "_blank",
  },
];

const MobileMenu = () => {
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <MenuItem key={i}>
                  <Link
                    className="menu-item-has-children"
                    to={item.path}
                    target={item.target}
                  >
                    {item.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      {/* <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span>Moonex</span>. All Rights Reserved.{" "}
          <br />
          Development by{" "}
          <span>
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noopener noreferrer"
            >
              ib-themes
            </a>
          </span>
          .
        </p>
        <Social />
      </div> */}
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
