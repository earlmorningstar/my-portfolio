import ConnectionNote from "./ConnectionNote";
import { IoMdArrowForward } from "react-icons/io";

export const projectItems = [
  {
    image: "/images/interity-img.png",
    projectType: "WEB APPLICATION",
    title: "Interity",
  },
  {
    image: "/images/interity-img.png",
    projectType: "WEB APPLICATION",
    title: "Interity",
  },
  {
    image: "/images/interity-img.png",
    projectType: "WEB APPLICATION",
    title: "Interity",
  },
  {
    image: "/images/interity-img.png",
    projectType: "WEB APPLICATION",
    title: "Interity",
  },
  {
    image: "/images/interity-img.png",
    projectType: "WEB APPLICATION",
    title: "Interity",
  },
  {
    image: "/images/interity-img.png",
    projectType: "WEB APPLICATION",
    title: "Interity",
  },
];

function Projects() {
  return (
    <>
      <div className="projects-main-container">
        <h2>Deployments</h2>

        <div className="projects-parent">
          {projectItems.map((item, index) => (
            <div className="project-holder" key={index}>
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
          ))}
        </div>
      </div>
      <ConnectionNote />
    </>
  );
}

export default Projects;
