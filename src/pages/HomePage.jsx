import "./Index.css";
import DispatchItem from "./DispatchItem";
import { projectItems } from "./Projects";
import { IoMdArrowForward } from "react-icons/io";
import { techItems } from "./StackPage";
import ConnectionNote from "./ConnectionNote";

function HomePage() {
  const dispatchItems = Array(12).fill({
    image: "/images/silhouette.jfif",
    text: "This is an inspirational quote for you to improve yourself and get better. Fight until the end.",
  });

  return (
    <>
      <div className="homepage-main-container">
        <span id="hp-mainContainer-span-id">
          <h3>Hey, I'm Joel,</h3>
          <h4>
            I'm a software developer and writer passionate about technology,
            creativity, and building meaningful connections through code and
            words.
          </h4>
        </span>

        <span>
          <h3>Recent Dispatch</h3>
        </span>

        <div className="latest-dispatch-container">
          {dispatchItems.slice(0, 3).map((item, index) => (
            <DispatchItem key={index} image={item.image} text={item.text} />
          ))}
        </div>

        <span>
          <h3>Recent Deployment</h3>
        </span>

        <div className="projects-parent">
          {projectItems.slice(0, 3).map((item, index) => (
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

        <span>
          <h3>Stack</h3>
        </span>

        <div className="hp-tech-kit-Parent">
          {techItems.slice(0, 3).map((item, index) => (
            <div className="hp-each-tech-kit" key={index}>
              <span>
                <img
                  src={item.image}
                  alt={item.title}
                  className="hp-stack-image"
                />
              </span>
              <div className="each-tech-info">
                <span>
                  <h3>{item.title}</h3>
                  <p id="stack-fs-id">{item.subtitle}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ConnectionNote />
    </>
  );
}

export default HomePage;
