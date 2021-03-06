import React, { useState } from "react";
import "./Nav.css";
import { navlinks } from "../../utils/data";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../../utils/images/effect.png";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { addElement } from "../../redux-toolkit/scrollElement/scrollElementSlice";
const Nav = () => {
  const dispatch = useDispatch();
  const customerData = useSelector(getCustomerData);
  const [showNav, setShowNav] = useState(false);
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
      <section className="top-nav">
        <div className="user-contact">
          <div>
            <a href={`tel:${customerData.phone}`}>
              <AiTwotonePhone />
            </a>
            <p>{customerData.phone}</p>
          </div>
          <div>
            <a href={`mailto:${customerData.email}`}>
              <AiOutlineMail />
            </a>
            <p>{customerData.email}</p>
          </div>
        </div>
      </section>
      <nav>
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar" onClick={() => setShowNav(!showNav)}>
          <AiOutlineBars />
        </div>
        <div className="nav-links">
          {navlinks.map((link) => (
            <div key={link.id}>
              <button type="button" onClick={handleClick}>
                {link.label}
              </button>
            </div>
          ))}
        </div>
        <div className={showNav ? "nav-menu show-nav" : "nav-menu"}>
          <button
            onClick={() => setShowNav(!showNav)}
            className="nav-btn-close"
          >
            <AiOutlineCloseCircle />
          </button>
          {navlinks.map((link) => (
            <div key={link.id} className="nav-links-div">
              <button type="button" onClick={handleClick}>
                {link.label}
              </button>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
