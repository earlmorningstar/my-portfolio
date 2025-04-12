import ConnectionNote from "./ConnectionNote";
import { IoMdArrowForward } from "react-icons/io";
import { SiGithub } from "react-icons/si";

export const projectItems = [
  {
    image: "/images/EchoChatImg.png",
    projectType: "MODERN WEB CHAT APP WITH REAL-TIME COMMUNICATION",
    title: "EchoChat",
    url: "https://echochat-pi.vercel.app",
    stack: "MERN",
    githubURL: "https://https://github.com/earlmorningstar/echo-chat",
    paragraph:
      "Built a real-time web chat application designed for seamless communication, integrating features like instant messaging, voice & video calling, and live call status updates. Leveraging React (TypeScript) for the frontend, Node.js & Express for the backend, MongoDB, and Twilio Voice and Video SDKs to enable seamless one-on-one calling within the chat application. The app supports dynamic call handling (accept, reject, end), call history tracking, and real-time presence updates. The UI also includes custom theming, animations, responsive interface design and interactive grid effects to elevate user experience.",
  },
  {
    image: "/images/trendVault-1.png",
    projectType: "E-COMMERCE WEB APPLICATION",
    title: "Trend Vault",
    url: "https://codsoft-trendvault.vercel.app",
    stack: "MERN",
    githubURL: "https://github.com/earlmorningstar/CODSOFT",
    paragraph:
      "A full-featured e-commerce platform built with React for frontend, Node.js & Express for backend, and MongoDB. TrendVault offers a seamless shopping experience with secure Stripe payment integration, real-time cart updates via WebSockets, product synchronization with Shopify, and advanced user account management. The app supports authentication, wishlist, notifications, and order tracking, all managed through a modular React Context system. Designed with scalability, security, and performance in mind, TrendVault demonstrates expertise in full-stack development, responsive interface design and third-party service integration.",
  },
  {
    image: "/images/projectMgtToolImg.png",
    projectType: "PROJECT MANAGEMENT APPLICATION",
    title: "Project Management App",
    url: "https://codsoft-projectmgtapp.vercel.app/",
    stack: "MERN",
    githubURL: "https://github.com/earlmorningstar/CODSOFT",
    paragraph:
      "Build this full-stack Project Management App, and it offers a streamlined way for users to manage multiple projects and tasks with precision. Users can create, edit, and delete projects, assign tasks with deadlines, and track task progress through customizable status indicators like (Pending, In-Progress, and Completed). A personal profile dashboard also allows for account management. Built with React, Node.js, Express, and MongoDB, the app demonstrates efficient CRUD operations, structured data handling, and responsive UI design",
  },
  {
    image: "/images/graceGuide-img.png",
    projectType: "WEB APPLICATION",
    title: "Grace Guide",
    url: "https://graceguide.vercel.app/",
    stack: "React",
    githubURL: "https://github.com/earlmorningstar/graceguide",
    paragraph:
      "Grace Guide is a Bible web application built with React that offers users a structured and uplifting devotional experience. The app features a Verse of the Day (VOTD) tab that displays the current and previous day's verses, including chapter reference and Bible version. Users can explore scripture through the Bible tab by selecting a version, book, chapter, and verse, with intuitive navigation for next/previous passages. A Read Full Chapter tab allows for seamless reading of entire chapters, while the Daily Prayer tab offers a curated devotional verse paired with a unique prayer. Bible content and verses are dynamically fetched from an external API, while daily prayers are preloaded within the app, ensuring both real-time access and personalized devotion.",
  },
  {
    image: "/images/espresso-two-img.png",
    projectType: "E-COMMERCE WEB APPLICATION",
    title: "Espresso Amore",
    url: "https://espressoamore.vercel.app/",
    stack: "React",
    githubURL: "https://github.com/earlmorningstar/espressoamore",
  },
  {
    image: "/images/port-img.png",
    projectType: "WEB APPLICATION",
    title: "My Portfolio",
    url: "https://my-portfolio-three-blue-58.vercel.app",
    stack: "React",
    githubURL: "https://github.com/earlmorningstar/my-portfolio",
  },
  {
    image: "/images/chronicleHub.png",
    projectType: "WEB APPLICATION",
    title: "Chronicle Hub",
    url: "https://github.com/earlmorningstar/chroniclehub",
    stack: "React",
    githubURL: "https://github.com/earlmorningstar/chroniclehub",
  },
  {
    image: "/images/kubeInsight-img.png",
    projectType: "WEB APPLICATION",
    title: "KubeInsight",
    url: "https://kubeinsights.vercel.app/",
    stack: "React",
    githubURL: "https://github.com/earlmorningstar/kubeInsights",
  },
  {
    image: "/images/interity-img22.png",
    projectType: "WEB APPLICATION",
    title: "Interity",
    url: "https://interity-six.vercel.app",
    stack: "React",
    githubURL: "https://github.com/earlmorningstar/Interity",
  },
];

function Projects() {
  return (
    <>
      <div className="projects-main-container">
        <h2>Deployments</h2>

        <div className="projects-parent">
          {projectItems.map((item, index) => (
            <div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="project-holder-link"
              >
                <span className="project-image-holder">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="project-image"
                  />
                </span>
                <h4>
                  {item.projectType} <IoMdArrowForward size={25} />
                </h4>
              </a>
              <div className="project-holder">
                <div className="project-info-parent">
                  <h3>{item.title}</h3>
                  <a
                    href={item.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="git-link"
                  >
                    <SiGithub size={18} /> {item.githubURL}
                  </a>
                  <h4>{item.paragraph}</h4>
                  <h5>Stack: {item.stack}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ConnectionNote />
    </>
  );
}

export default Projects;
