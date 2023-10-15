import React from "react";
import Image from "../Images/Image.jpg";
import Navigationcontainer from "./Navigationcontainer";
import Welcome from "./Welcome";

const Imagestyles = {
  width: "400px",
  height: "500px",
  borderRadius: "50%",
  border: "10px solid white",
  boxShadow: "0 0 10px 10px white",
  marginBottom:"100px"
};

const Textstyles = {
  color: "white",
  textAlign: "center",
  marginBottom:"100px",
  marginTop:"100px"
};

const containerStyle = {
  backgroundColor: "#333",
  height: "auto",
};

function Header() {
  return (
    <div className="Header-container">
      <div style={containerStyle} className="row d-flex flex-row align-items-center justify-content-center">
        <Welcome />
        <h1 className="col-xl-6 h1 col-md-6 col-md-6 col-sm-6 col-12" style={Textstyles}>
          Hello, I am Mahesh Kumar Selvaraj.
          <br />
          I am a front-end developer.
        </h1>

        <img className="col-xl-6 h1 col-md-6 col-md-6 col-sm-6 col-12 image-container" style={Imagestyles} src={Image} alt="Profile pic" />
      </div>
    </div>
  );
}

export default Header;
