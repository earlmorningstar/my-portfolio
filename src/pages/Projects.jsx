import { useEffect, useState } from "react";
import ConnectionNote from "./ConnectionNote";
import { useAOS } from "../context/AOSContext";
import { IoMdArrowForward } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const projectItems = [
  {
    images: [
      "images/EchoChatImg-1.png",
      "images/EchoChatImg-2.png",
      "images/EchoChatImg-3.png",
      "images/EchoChatImg-4.png",
      "images/EchoChatImg-5.png",
      "images/EchoChatImg-6.png",
      "images/EchoChatImg-7.png",
      "images/EchoChatImg-8.png",
      "images/EchoChatImg-9.png",
      "images/EchoChatImg-10.png",
      "images/EchoChatImg-11.png",
    ],
    projectType: "MODERN WEB CHAT APP WITH REAL-TIME COMMUNICATION",
    title: "EchoChat",
    url: "https://echochat-pi.vercel.app",
    stack: [
      { img: "images/mongodb.png", name: "MongoDB" },
      { img: "images/express-9d.png", name: "Express.js" },
      { img: "images/react-img-removebg-preview.png", name: "React" },
      { img: "images/nodejs.png", name: "Node.js" },
      { img: "images/typescript.jpg", name: "TypeScript" },
      { img: "images/twilio-i-9d.png", name: "Twilio" },
      { img: "images/nodemailer-9d.png", name: "Node Mailer" },
      { img: "images/materialUI-9d.png", name: "Material UI" },
    ],
    githubURL: "https://github.com/earlmorningstar/echo-chat",
    paragraph:
      "Built a real-time web chat application designed for seamless communication, integrating features like instant messaging, voice & video calling, and live call status updates. Leveraging React (TypeScript) for the frontend, Node.js & Express for the backend, MongoDB, and Twilio Voice and Video SDKs to enable seamless one-on-one calling within the chat application. The app supports dynamic call handling (accept, reject, end), call history tracking, and real-time presence updates. The UI also includes custom theming, animations, responsive interface design and interactive grid effects to elevate user experience.",
  },
  {
    images: [
      "images/trendVault-1.png",
      "images/trendVault-3.png",
      "images/trendVault-4.png",
      "images/trendVault-5.png",
      "images/trendVault-6.png",
      "images/trendVault-7.png",
      "images/trendVault-8.png",
      "images/trendVault-9.png",
      "images/trendVault-10.png",
      "images/trendVault-11.png",
    ],
    projectType: "E-COMMERCE WEB APPLICATION",
    title: "Trend Vault",
    url: "https://codsoft-trendvault.vercel.app",
    stack: [
      { img: "images/mongodb.png", name: "MongoDB" },
      { img: "images/express-9d.png", name: "Express.js" },
      { img: "images/react-img-removebg-preview.png", name: "React" },
      { img: "images/nodejs.png", name: "Node.js" },
      { img: "images/shopify-9d.png", name: "Shopify" },
      { img: "images/stripe-9d.jpg", name: "Stripe" },
      { img: "images/nodemailer-9d.png", name: "Node Mailer" },
      { img: "images/materialUI-9d.png", name: "Material UI" },
    ],
    githubURL: "https://github.com/earlmorningstar/CODSOFT",
    paragraph:
      "A full-featured e-commerce platform built with React for frontend, Node.js & Express for backend, and MongoDB. TrendVault offers a seamless shopping experience with secure Stripe payment integration, real-time cart updates via WebSockets, product synchronization with Shopify, and advanced user account management. The app supports authentication, wishlist, notifications, and order tracking, all managed through a modular React Context system. Designed with scalability, security, and performance in mind, TrendVault demonstrates expertise in full-stack development, responsive interface design and third-party service integration.",
  },
  {
    images: [
      "images/projectMgtToolImg-1.png",
      "images/projectMgtToolImg-2.png",
      "images/projectMgtToolImg-3.png",
      "images/projectMgtToolImg-4.png",
    ],
    projectType: "PROJECT MANAGEMENT WEB APPLICATION",
    title: "Project Management App",
    url: "https://codsoft-projectmgtapp.vercel.app/",
    stack: [
      { img: "images/mongodb.png", name: "MongoDB" },
      { img: "images/express-9d.png", name: "Express.js" },
      { img: "images/react-img-removebg-preview.png", name: "React" },
      { img: "images/nodejs.png", name: "Node.js" },
      { img: "images/materialUI-9d.png", name: "Material UI" },
    ],
    githubURL: "https://github.com/earlmorningstar/CODSOFT",
    paragraph:
      "Build this full-stack Project Management App, and it offers a streamlined way for users to manage multiple projects and tasks with precision. Users can create, edit, and delete projects, assign tasks with deadlines, and track task progress through customizable status indicators like (Pending, In-Progress, and Completed). A personal profile dashboard also allows for account management. Built with React, Node.js, Express, and MongoDB, the app demonstrates efficient CRUD operations, structured data handling, and responsive UI design",
  },
  {
    images: [
      "images/graceGuide-1.png",
      "images/graceGuide-2.png",
      "images/graceGuide-3.png",
      "images/graceGuide-4.png",
      "images/graceGuide-5.png",
    ],
    projectType: "WEB APPLICATION",
    title: "Grace Guide",
    url: "https://graceguide.vercel.app/",
    stack: [{ img: "images/react-img-removebg-preview.png", name: "React" }],
    githubURL: "https://github.com/earlmorningstar/graceguide",
    paragraph:
      "Grace Guide is a Bible web application built with React that offers users a structured and uplifting devotional experience. The app features a Verse of the Day (VOTD) tab that displays the current and previous day's verses, including chapter reference and Bible version. Users can explore scripture through the Bible tab by selecting a version, book, chapter, and verse, with intuitive navigation for next/previous passages. A Read Full Chapter tab allows for seamless reading of entire chapters, while the Daily Prayer tab offers a curated devotional verse paired with a unique prayer. Bible content and verses are dynamically fetched from an external API, while daily prayers are preloaded within the app, ensuring both real-time access and personalized devotion.",
  },
  {
    images: ["images/espresso-two-img.png"],
    projectType: "E-COMMERCE WEB APPLICATION",
    title: "Espresso Amore",
    url: "https://espressoamore.vercel.app/",
    stack: [
      { img: "images/react-img-removebg-preview.png", name: "React" },
      { img: "images/materialUI-9d.png", name: "Material UI" },
    ],
    githubURL: "https://github.com/earlmorningstar/espressoamore",
    paragraph:
      "Empresso Amore is a React-based e-commerce web application centered around a coffee shopping experience. Users can create accounts, browse the coffee menu, add items to their cart or favorites, and proceed through checkout. The app includes a user profile section displaying personal details and account management options. Built as a practice project, it demonstrates effective use of Context API for global state management, local storage for persistence, and robust API integration with error handling to simulate a full-featured shopping workflow.",
  },
  {
    images: ["images/port-img.png"],
    projectType: "WEB APPLICATION",
    title: "My Portfolio",
    url: "https://earlmorningstar.github.io/my-portfolio",
    stack: [
      { img: "images/react-img-removebg-preview.png", name: "React" },
      { img: "images/materialUI-9d.png", name: "Material UI" },
    ],
    githubURL: "https://github.com/earlmorningstar/my-portfolio",
    paragraph:
      "My Developer Portfolio is a clean, responsive web application built with React to showcase my work, skills, and background. It features dedicated tabs for an introduction about me, my tech stack, selected projects, and contact information. The contact section integrates EmailJS, allowing visitors to reach out directly via email through the site, alongside links to my social profiles. It also includes a licensing section for transparency regarding project usage. Designed with simplicity and clarity in mind, it serves as a central hub for presenting my development journey.",
  },
  {
    images: ["images/chronicleHub.png"],
    projectType: "WEB APPLICATION",
    title: "Chronicle Hub",
    url: "https://github.com/earlmorningstar/chroniclehub",
    stack: [{ img: "images/react-img-removebg-preview.png", name: "React" }],
    githubURL: "https://github.com/earlmorningstar/chroniclehub",
    paragraph:
      "ChronicleHub is a dynamic blog-style web application that fetches real-time news from multiple external APIs, offering users a variety of stories across different categories. Built with React and Context API for efficient state management, it displays article titles, descriptions, authors, publish dates, thumbnails, and direct links to full content (due to API constraints). It includes features like automatic content refresh, error handling, and responsive design, serving as a practical showcase of API integration, state handling, and adaptive UI development.",
  },
  {
    images: ["images/kubeInsight-img.png"],
    projectType: "WEB APPLICATION",
    title: "KubeInsight",
    url: "https://kubeinsights.vercel.app/",
    stack: [{ img: "images/react-img-removebg-preview.png", name: "React" }],
    githubURL: "https://github.com/earlmorningstar/kubeInsights",
    paragraph:
      "KubeInsights is a responsive, multi-page landing web application focused on clean UI, smooth navigation, and user experience. It showcases effective use of React fundamentals including code splitting, form validation, and modular styling—all without external APIs or complex state management. The project emphasizes structured layouts, intuitive design, and performance-focused implementation.",
  },
];

const Projects = () => {
  const [slidersInitialized, setSlidersInitialized] = useState(false);
  const aos = useAOS();
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const componentId = "stack-page";

  useEffect(() => {
    const canAnimate = aos.refreshComponent(componentId);
    setShouldAnimate(canAnimate);

    const timer = setTimeout(() => {
      setSlidersInitialized(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [aos, componentId]);

  const renderProjectImage = (item) => {
    if (item.images.length === 1) {
      return (
        <img src={item.images[0]} alt={item.title} className="project-image" />
      );
    }

    if (!slidersInitialized) {
      return (
        <img src={item.images[0]} alt={item.title} className="project-image" />
      );
    }

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      pauseOnHover: true,
    };

    return (
      <div className="project-slider-container">
        <Slider {...settings}>
          {item.images.map((image, idx) => (
            <div key={idx}>
              <img
                src={image}
                alt={`${item.title} slide ${idx + 1}`}
                className="project-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <>
      <div className="projects-main-container">
        <h2 data-aos={shouldAnimate ? "fade-up" : ""} data-aos-delay="100">
          Deployments
        </h2>

        <div
          className="projects-parent"
          data-aos={shouldAnimate ? "fade-up" : ""}
          data-aos-delay="200"
        >
          {projectItems.map((item, index) => (
            <div key={index}>
              <div className="project-info-parent">
                <h3>{item.title}</h3>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-holder-link"
              >
                <span className="project-image-holder">
                  {renderProjectImage(item)}
                </span>
                <h4>
                  {item.projectType} <IoMdArrowForward size={25} />
                </h4>
              </a>
              <div className="project-holder">
                <div className="project-info-parent">
                  <a
                    href={item.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="git-link"
                  >
                    <SiGithub size={18} /> {item.githubURL}
                  </a>
                  <h4>{item.paragraph}</h4>

                  <div className="stack-container">
                    <div className="stack-icons">
                      {item.stack.map((stackItem, idx) => (
                        <div key={idx} className="stack-item">
                          <img
                            src={stackItem.img}
                            alt={stackItem.name}
                            className="stack-icon"
                          />
                          <span className="stack-name">{stackItem.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ConnectionNote />
    </>
  );
};

export default Projects;
