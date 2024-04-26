import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("home");
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <AnchorLink className="anchor-link" href="#home">
          Rudra
        </AnchorLink>
        <p>.</p>
      </div>
      <ul className={isOpen ? "nav-menu" : "nav-menu active"}>
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#about">
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#work">
            <p onClick={() => setMenu("about")}>Portfolio</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#contact">
            <p onClick={() => setMenu("about")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact">
          Connect with me
        </AnchorLink>
      </div>
      <div className="mobile-menu-icon" onClick={handleMenuToggle}>
        {isOpen ? <ImCross /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
