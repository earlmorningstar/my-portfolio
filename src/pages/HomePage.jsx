import "./Index.css";
import DispatchItem from "./DispatchItem";
import { projectItems } from "./Projects";
import { IoMdArrowForward } from "react-icons/io";
// import { techItems } from "./StackPage"; 

function HomePage() {
  const dispatchItems = Array(12).fill({
    image: "/images/silhouette.jfif",
    text: "This is an inspirational quote for you to improve yourself and get better. Fight until the end.",
  });

  return (
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

      <span>
        <h3>Stack</h3>
      </span>

      {/* <div id="tech-kit-Parent-id" >
        {techItems.slice(0, 3).map((item, index) => (
          <div id="each-tech-kit-id" key={index}>
            <span>
              <img src={item.image} alt={item.title} id="stack-image-id" />
            </span>
            <div className="each-tech-info">
              <span>
                <h3 id="stack-title">{item.title}</h3>
                <p id="stack-fs-id">{item.subtitle}</p>
              </span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div> */}

     
    </div>
  );
}

export default HomePage;