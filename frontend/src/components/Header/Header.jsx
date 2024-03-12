import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import "../Header/Header.css";
import logo from "../../assets/Woofily.png";

const Header = () => {
  return (
    <>
      <nav className="home-header">
        <div className="home-navbar-container">
          <div className="navbar-logo">
            <div className="navbar-logo-ing">
              <Link to="/">
                <img src={logo} alt="Woofily" />
              </Link>
            </div>

            <div
              className="mylocation"
              style={{
                padding: "20px",
                margin: "10px",
                width: "auto",
                borderRadius: "40px",
              }}
            >
              <input
                type="text"
                placeholder="231, Pocket A, B Pocket Dwarka 17"
                padding="10px"
              />
            </div>
            <div className="menu">
              {/* <div className="home_navbar_section_change_container"> */}
              <NavLink
                className="sec_change_btn"
                activeClassName="active"
                to="/"
              >
                <FaHome className="btn_icon" />
                Home
              </NavLink>
              <NavLink
                className="sec_change_btn"
                activeClassName="active"
                to="/community"
              >
                <FaPeopleGroup className="btn_icon" />
                Community
              </NavLink>
              {/* </div> */}
            </div>
          </div>

          <ul className="home-navbar-link-list">
            <div className="navbar-img">
              <button className="btn btn-light becomehostbtn">
                Become a Host
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
