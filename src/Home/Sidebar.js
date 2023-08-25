import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <i
          className={`fas ${isOpen ? "fa-chevron-left" : "fa-chevron-right"}`}
        ></i>
      </div>
      <div className="sidebar-content">
        <h1>NFTIFY</h1>
        <ul>
          <li className={location.pathname === "/token" ? "active" : ""}>
            <Link to="/token">Token Address</Link>
          </li>
          <li className={location.pathname === "/pair" ? "active" : ""}>
            <Link to="/pair">Pair Address</Link>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
