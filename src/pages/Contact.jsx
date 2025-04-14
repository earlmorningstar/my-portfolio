import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useAOS } from "../context/AOSContext";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { MdLocalPhone } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithub, SiSubstack } from "react-icons/si";

const Contact = () => {
  const aos = useAOS();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const componentId = "stack-page";
  const [snackbar, setSnackbar] = useState({
    open: false,
    type: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setSnackbar({
            open: true,
            type: "success",
            message: "Your message has been sent successfully!",
          });
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending email:", error);
          setSnackbar({
            open: true,
            type: "error",
            message: "Failed to send your message. Please try again.",
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  useEffect(() => {
    const canAnimate = aos.refreshComponent(componentId);
    setShouldAnimate(canAnimate);
  }, [aos, componentId]);

  return (
    <div className="contact-main-container">
      <h2 data-aos={shouldAnimate ? "fade-up" : ""} data-aos-delay="100">
        Forge a Connection
      </h2>

      <div className="contactInfo-flex">
        <div
          className="contactLinks-parent"
          data-aos={shouldAnimate ? "fade-up" : ""}
          data-aos-delay="200"
        >
          <h4 className="contact-header">Contact</h4>
          <p id="contact-fsz-id">
            <a
              href="mailto:sayhitojoelinton@gmail.com"
              style={{
                color: "#999999",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AiFillMail size={15} color="#999999" />{" "}
              <span style={{ marginLeft: "0.5rem" }}>
                sayhitojoelinton@gmail.com
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
              href="mailto:sayhitojoelinton@gmail.com"
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

        <div className="form-container" data-aos={shouldAnimate ? "fade-up" : ""} data-aos-delay="300">
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
            <button type="submit" disabled={loading}>
              {loading ? (
                <CircularProgress size={12} sx={{ color: "#000000" }} />
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.type}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
