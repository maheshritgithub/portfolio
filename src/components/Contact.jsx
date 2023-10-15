import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const containerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#3d3d3d",
  color: "white",
  borderRadius: "50px",
  textAlign: "center",
};

const Inputstyles = {
  padding: "10px",
  margin: "20px",
  borderRadius: "20px",
  resize: "none",
};

function Contact() {
  const form = useRef();

  // State variables to hold input values
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qacbdlp', 'template_klvs1j8', form.current, 'lBZNbpc5c93ju2onP')
      .then((result) => {
        console.log(result.text);
        console.log("Message sent successfully.");

        // Clear input fields
        setUserName('');
        setUserEmail('');
        setUserMessage('');
      })
      .catch((error) => {
        console.error("Error sending the message:", error);
      });
  };

  return (
    <div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "15vh",
        backgroundColor: "#218c74",
        width: "100%",
        border: "10px solid #1a535c",
        marginBottom: "10px",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
      }}>
        <h1>CONTACT</h1>
      </div>

      <div style={{ backgroundColor: "#341f97", height: "800px", display: "flex", alignItems: "center", alignContent: "center" }}>
        <div style={containerStyle}>
          <h2 style={{ color: "white", marginBottom: "20px" }}>Leave a Message for Any Other Information</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="col-8"
              style={Inputstyles}
              type="text"
              name="user_name"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="col-8"
              style={Inputstyles}
              type="email"
              name="user_email"
              placeholder="Enter your email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <textarea
              className="col-8"
              style={Inputstyles}
              name="message"
              placeholder="Enter your message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <div>
              <input
                type="submit"
                value="Send"
                style={{
                  padding: "10px 20px",
                  background: "#218c74",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
