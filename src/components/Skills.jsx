import React from "react";
import HTML from "../Images/HTML.png";
import CSS from "../Images/CSS.png";
import BOOTSTRAP from "../Images/BOOTSTRAP.png";
import JS from "../Images/JS.png";
import REACT from "../Images/REACT.png";
import JQUERY from "../Images/JQUERY.png";
import GITHUB from "../Images/GITHUB.png";

const Imagestyles = {
    width: "150px",
    height: "100px",
    margin: "40px",
    
};

function Skills() {
    return (
        <div>    


            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "15vh",
                backgroundColor: " #98FF98",
                width: "100%",
                border: "10px solid  #808080",
                marginBottom:"10px"
            }}>
                <h1>SKILLS</h1>
            </div>

            <div style={{backgroundColor:"#F59B82", maxWidth:"100%"}} className="container d-flex flex-column align-items-center justify-content-center">
                <img style={Imagestyles} src={HTML} alt="HTML" />
                <img style={Imagestyles} src={CSS} alt="CSS" />
                <img style={Imagestyles} src={BOOTSTRAP} alt="Bootstrap" />
                <img style={Imagestyles} src={JS} alt="JavaScript" />
                <img style={Imagestyles} src={JQUERY} alt="jQuery" />
                <img style={Imagestyles} src={REACT} alt="React" />
                <img style={Imagestyles} src={GITHUB} alt="GitHub" />
            </div>

        </div>

    );
}

export default Skills;
