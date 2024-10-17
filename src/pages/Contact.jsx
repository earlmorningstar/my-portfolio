import { useState } from "react";

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
    console.log("Form submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-main-container">
      <h2>Forge a Connection</h2>

      <div className="contactInfo-flex">
        <div className="contactLinks-parent">
          <h4 className="contact-header">Contact</h4>
          <p id="contact-fsz-id">
            <AiFillMail size={15} color="#999999" /> earlmorningstar@gmail.com
          </p>
          <p id="contact-fsz-id">
            <MdLocalPhone size={15} color="#999999" /> +234 903 573 6627
          </p>
          <h4 className="contact-header">My Online Presence</h4>
          <p>
            <FaXTwitter size={15} color="#999999" /> Twitter
          </p>
          <p>
            <IoLogoInstagram size={15} color="#999999" /> Instagram
          </p>
          <p>
            <SiGithub size={15} color="#999999" /> Github
          </p>
          <p>
            <AiFillLinkedin size={15} color="#999999" /> LinkedIn
          </p>
          <p>
            <SiSubstack size={15} color="#999999" /> Substack
          </p>
          <p>
            <AiFillMail size={15} color="#999999" /> Mail
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
