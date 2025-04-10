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
  },
  {
    image: "/images/trendVault-1.png",
    projectType: "E-COMMERCE WEB APPLICATION",
    title: "Trend Vault",
    url: "https://codsoft-trendvault.vercel.app",
    stack: "MERN",
    githubURL: "https://github.com/earlmorningstar/CODSOFT",
  },
  {
    image: "/images/projectMgtToolImg.png",
    projectType: "PROJECT MANAGEMENT APPLICATION",
    title: "Project Management App",
    url: "https://codsoft-projectmgtapp.vercel.app/",
    stack: "MERN",
    githubURL: "https://github.com/earlmorningstar/CODSOFT",
  },
  {
    image: "/images/graceGuide-img.png",
    projectType: "WEB APPLICATION",
    title: "Grace Guide",
    url: "https://graceguide.vercel.app/",
    stack: "React",
    githubURL: "https://github.com/earlmorningstar/graceguide",
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
