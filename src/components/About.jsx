import React from "react";

const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#1dd1a1",
    borderRadius: "50px"
};

const headerStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "20px 0",
    color: "#e67e22"
};

const paragraphStyle = {
    fontSize: "20px",
    lineHeight: "1.6",
    margin: "10px 0",
};

const contactInfoStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px 0",

};

const emailLinkStyle = {
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
};

const phoneLinkStyle = {
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
  };


function About() {

    const email = "ssmahesh001@gmail.com";
    const phone = "+919655994386"; 

    const handleEmailClick = () => {

        window.location.href = `mailto:${email}`;
    };

    

    const handlePhoneClick = () => {
      window.location.href = `tel:${phone}`;
    };


    return (

        <div>

            <div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "15vh",
                    backgroundColor: " #f1c40f",
                    width: "100%",
                    border: "10px solid  #c0392b",
                    marginBottom: "10px"
                }}>
                    <h1>ABOUT</h1>
                </div>

            </div>

            <div style={{ backgroundColor: "#ee5253", height: "85vh" }} className="d-flex flex-column align-items-center justify-content-center">

                <div style={containerStyle}>

                    <h3 style={headerStyle}>About Me:</h3>

                    <p style={paragraphStyle}>
                        I am Mahesh Kumar S, a passionate front-end developer with a background
                        in engineering. I completed my Bachelor of Engineering (B.E.) from
                        Coimbatore Institute of Technology in the year 2023.
                    </p>


                    <h3 style={headerStyle}>Professional Journey:</h3>

                    <p style={paragraphStyle}>
                        Throughout my educational journey, I discovered my love for web
                        development, and I decided to pursue a career in this dynamic field. I
                        have honed my skills as a front-end developer, and I'm committed to
                        delivering outstanding user experiences through intuitive and
                        aesthetically pleasing websites.
                    </p>


                    <h3 style={headerStyle}>Contact Information:</h3>

                    <p style={contactInfoStyle}>
                        Phone:{" "}
                        <span style={phoneLinkStyle} onClick={handlePhoneClick}>
                            +91 9655994386
                        </span><br/>
                        Email:{" "}
                        <span style={emailLinkStyle} onClick={handleEmailClick}>
                            ssmahesh001@gmail.com
                        </span>
                    </p>
                </div>

            </div>

        </div>


    );
}

export default About;
