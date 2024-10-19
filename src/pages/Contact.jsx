import { useState } from "react";
import emailjs from "emailjs-com";

import { AiFillMail } from "react-icons/ai";
import { MdLocalPhone } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { SiSubstack } from "react-icons/si";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send("service_x8h029h", "template_saic1bm", templateParams, "MHe-GqAhpg2rVTW_W")
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("Error sending email:", error);
        }
      );
  };

  return (
    <div className="contact-main-container">
      <h2>Forge a Connection</h2>

      <div className="contactInfo-flex">
        <div className="contactLinks-parent">
          <h4 className="contact-header">Contact</h4>
          <p id="contact-fsz-id">
            <a
              href="mailto:earlmorningstar@gmail.com"
              style={{
                color: "#999999",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AiFillMail size={15} color="#999999" />{" "}
              <span style={{ marginLeft: "0.5rem" }}>
                earlmorningstar@gmail.com
              </span>
            </a>
          </p>
          <p id="contact-fsz-id">
            <a
              href="https://wa.me/2349035736627"
              style={{
                color: "#999999",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MdLocalPhone size={15} color="#999999" />{" "}
              <span style={{ marginLeft: "0.5rem" }}>+234 903 573 6627</span>
            </a>
          </p>
          <h4 className="contact-header">My Online Presence</h4>
          <p>
            <a
              href="https://twitter.com/earlmorningsta1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#999999",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaXTwitter size={15} color="#999999" />{" "}
              <span style={{ marginLeft: "0.5rem" }}>Twitter</span>
            </a>
          </p>
          <p>
            <a
              href="https://instagram.com/earlmorningstar"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#999999",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoLogoInstagram size={15} color="#999999" />{" "}
              <span style={{ marginLeft: "0.5rem" }}>Instagram</span>
            </a>
          </p>
          <p>
            <a
              href="https://github.com/earlmorningstar"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#999999",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SiGithub size={15} color="#999999" />{" "}
              <span style={{ marginLeft: "0.5rem" }}>Github</span>
            </a>
          </p>
          <p>
            <a
              href="https://linkedin.com/in/joel-onyeabor"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#999999",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AiFillLinkedin size={15} color="#999999" />{" "}
              <span style={{ marginLeft: "0.5rem" }}>LinkedIn</span>
            </a>
          </p>
          <p>
            <a
              href="https://earlmorningstar.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#999999",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SiSubstack size={15} color="#999999" />{" "}
              <span style={{ marginLeft: "0.5rem" }}>Substack</span>
            </a>
          </p>
          <p>
            <a
              href="mailto:earlmorningstar@gmail.com"
              style={{
                color: "#999999",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AiFillMail size={15} color="#999999" />{" "}
              <span style={{ marginLeft: "0.5rem" }}>Mail</span>
            </a>
          </p>
        </div>

        <div className="form-container">
          <h4 className="contact-header"> Send Me A Message</h4>
          <form className="form-holder" onSubmit={handleSubmit}>
            <div className="name-email-flexHolder">
              <div className="infoInput-holder">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="infoInput-holder">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="infoInput-holder">
              <textarea
                id="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
