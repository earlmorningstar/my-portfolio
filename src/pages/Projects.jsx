import ConnectionNote from "./ConnectionNote";
import { IoMdArrowForward } from "react-icons/io";

export const projectItems = [
  {
    image: "/images/graceGuide-img.png",
    projectType: "WEB APPLICATION",
    title: "Grace Guide",
    url: "https://graceguide.vercel.app/",
  },
  {
    image: "/images/espresso-two-img.png",
    projectType: "E-COMMERCE WEB APPLICATION",
    title: "Espresso Amore",
    url: "https://espressoamore.vercel.app/",
  },
  {
    image: "/images/kubeInsight-img.png",
    projectType: "WEB APPLICATION",
    title: "KubeInsight",
    url: "https://kubeinsights.vercel.app/",
  },
  {
    image: "/images/interity-img.png",
    projectType: "WEB APPLICATION",
    title: "Interity",
    url: "https://interity-six.vercel.app",
  },
  //   {
  //     image: "/images/interity-img.png",
  //     projectType: "WEB APPLICATION",
  //     title: "Interity",
  //   },
  //   {
  //     image: "/images/interity-img.png",
  //     projectType: "WEB APPLICATION",
  //     title: "Interity",
  //   },
];

function Projects() {
  return (
    <>
      <div className="projects-main-container">
        <h2>Deployments</h2>

        <div className="projects-parent">
          {projectItems.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="project-holder-link"
            >
              <div className="project-holder">
                <span>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="project-image"
                  />
                </span>
                <div className="project-info-parent">
                  <h4>
                    {item.projectType} <IoMdArrowForward size={25} />
                  </h4>
                  <h3>{item.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <ConnectionNote />
    </>
  );
}

export default Projects;