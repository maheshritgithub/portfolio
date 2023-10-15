import React from "react";
import Ecommerce from "../Images/Ecommerce.jpg";
import Drums from "../Images/Drums.jpg";
import Dog from "../Images/Dog.jpg";
import Notes from "../Images/Notes.jpg";
import Giticon from "../Images/Giticon.png"

const Imagestyles = {
    width: "300px",
    height: "300px",
    marginBottom: "15px",

}

const divstyles = {
    padding: "50px",

}

const Iconstyles = {
    width: "75px",
    height: "30px"
}

function Projects() {
    return (

        <div>

            <div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "15vh",
                    backgroundColor: " #98FF98",
                    width: "100%",
                    border: "10px solid  #C4E538",
                    marginBottom: "10px"
                }}>
                    <h1>PROJECTS</h1>
                </div>

            </div>


            <div className="d-flex flex-row align-items-center justify-content-center">


                <div className="row">

                    <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-12" style={divstyles}>

                        <div className="image-container">
                            <img style={Imagestyles} src={Dog} alt="Dog" />
                        </div>



                        <div className="d-flex flex-row flex-grow-1 flex-wrap">

                            <a href="https://maheshritgithub.github.io/Dog-seller-website/" target="_blank" style={{ textDecoration: 'none' }}>
                                <h3 className="h3">Dog Selling Website</h3>
                            </a>

                            <a href="https://github.com/maheshritgithub/Dog-seller-website" target="_blank" style={{ textDecoration: 'none' }}>
                                <img style={Iconstyles} src={Giticon} alt="git hub icon" />
                            </a>

                        </div>

                    </div>



                    <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-12" style={divstyles}>
                        <div className="image-container" >
                            <img style={Imagestyles} src={Ecommerce} alt="Ecommerce" />
                        </div>


                        <div className="d-flex flex-row flex-grow-1 flex-wrap">
                            <a href="https://maheshritgithub.github.io/Ecommerce-Website/" target="_blank" style={{ textDecoration: 'none' }}>
                                <h3 className="h3">E-Commerce Website</h3>
                            </a>

                            <a href="https://github.com/maheshritgithub/Ecommerce-Website" target="_blank" >
                                <img style={Iconstyles} src={Giticon} alt="git hub icon" />
                            </a>
                        </div>

                    </div>


                    <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-12" style={divstyles}>

                        <div className="image-container" >
                            <img style={Imagestyles} src={Notes} alt="Notes" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "row", gap: "80px" }}>

                            <a href="https://maheshritgithub.github.io/List/" target="_blank" style={{ textDecoration: 'none' }}>
                                <h3 className="h3">Notes App</h3>
                            </a>

                            <a href="https://github.com/maheshritgithub/List" target="_blank">
                                <img style={Iconstyles} src={Giticon} alt="git hub icon" />
                            </a>
                        </div>


                    </div>


                    <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-12" style={divstyles}>

                        <div className="image-container" >

                            <img style={Imagestyles} src={Drums} alt="Drums" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "row", gap: "80px" }}>

                            <div>

                                <a href="https://maheshritgithub.github.io/Drum-kit/" target="_blank" style={{ textDecoration: 'none' }}>

                                    <h3 className="h3">Musical App</h3>
                                </a>

                                <a href="https://github.com/maheshritgithub/Drum-kit" target="_blank">
                                    <img style={Iconstyles} src={Giticon} alt="git hub icon" />
                                </a>

                            </div>
                            
                        </div>


                    </div>

                </div>
            </div>

        </div >
    );
}

export default Projects;
