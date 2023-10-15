import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const containerStyle = {
  backgroundColor: "#333",
  padding: "20px 0",
  borderBottom: "2px solid #555",
};

const headerStyle = {
  display: "flex",
  justifyContent: "center",
};

const navItemStyle = {
  margin: "0 10px",
  padding: "5px 10px",
  cursor: "pointer",
  color: "#fff",
  textDecoration: "none",
  border: "2px solid transparent",
  transition: "border 0.3s ease",
};

const activeNavItemStyle = {
  borderColor: "#fff"
}

function NavigationContainer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div style={containerStyle}>
      <div className="container">
        <header style={headerStyle}>
          <ul className="nav">
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={navItemStyle}
                activeClass="active"
                onSetActive={scrollToTop}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={navItemStyle}
                activeClass="active"
              >
                SKILLS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={navItemStyle}
                activeClass="active"
              >
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={navItemStyle}
                activeClass="active"
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={navItemStyle}
                activeClass="active"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default NavigationContainer;
