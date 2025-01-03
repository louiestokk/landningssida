import React, { useState } from "react";
import "./Nav.css";
import CallIcon from '@material-ui/icons/Call';
import { useAuth0 } from "@auth0/auth0-react";
import { navlinks } from "../../utils/data";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addElement } from "../../redux-toolkit/scrollElement/scrollElementSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import Links from "../externalLinks/Links";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const Nav = () => {
  const dispatch = useDispatch();
  const [showNav, setShowNav] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const customerData = useSelector(getCustomerData);
  const handleClick = (e) => {
    dispatch(addElement(e.currentTarget.innerText));
    if (e.currentTarget.innerText === "Om oss") {
      const value = e.currentTarget.innerText.split("oss")[0];
      dispatch(addElement(value));
    }

    setShowNav(false);
  };

  return (
    <>
      <nav>
        <div className="nav-logo" onClick={() => (window.location.href = "/")}>
          <h2 style={{fontSize:'1rem'}} className="logo">Trygga</h2>
          <h2 style={{fontSize:'1rem'}} className="logo">Dödsbon</h2>
        </div>
     
        <div className="navbar" onClick={() => setShowNav(!showNav)}>
          <RiBarChartHorizontalLine />
        </div>
       
        <div className="nav-links">
          {navlinks.map((link) => {
            if (link.path) {
              return (
                <button
                  key={link.id}
                  style={{
                    background: "transparent",
                    border: "navajowhite",
                    color: "black",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    marginRight: " 0.75rem",
                    opacity: 0.8,
                    letterSpacing: "1px"
                  }}
                >
                  <Link
                    to={link.path}
                    style={{ color: "black" }}
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                </button>
              );
            } else {
              return (
                <div key={link.id} style={{ color: "black" }}>
                  <button type="button" onClick={handleClick}>
                    {link.label}
                  </button>
                </div>
              );
            }
          })}
        </div>
        <div className={showNav ? "nav-menu show-nav" : "nav-menu"}>
          <button
            onClick={() => setShowNav(!showNav)}
            className="nav-btn-close"
          >
            <AiOutlineCloseCircle />
          </button>
          <h2>Sidor</h2>
          {navlinks.map((link, i) => {
            if (link.path) {
              return (
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "black",
                    margin: "0.3rem 0",
                    fontSize: "1rem",
                    textDecoration:'underline'
                  }}
                  key={link.id}
                >
                  <Link
                    to={link.path}
                    style={{ color: "black" }}
                    className="nav-menu-link"
                  >
                    {link.label}
                  </Link>
                </button>
              );
            } else {
              return (
                <div key={link.id}>
                  <button type="button" onClick={handleClick}>
                    {link.label}
                  </button>
                </div>
              );
            }
          })}
          <article style={{height:'35px'}}></article>
          <div className="nav-logo" onClick={() => (window.location.href = "/")}>
          <h2 style={{fontSize:'1rem'}} className="logo">Trygga</h2>
          <h2 style={{fontSize:'1rem'}} className="logo">Dödsbon</h2>
        </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
