import "./Index.css";
import { MdOutlineReadMore } from "react-icons/md";

function HomePage() {
  return (
    <div className="homepage-main-container">
      <span>
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
        <div  className="dispatch-image-container">
          <img src="/images/silhouette.jfif" alt="Profile" />
          <p className="dispatch-overlay-text">
            This is an inspirational quote for you to improve yourself and get
            better. Fight until the end. <p>Dig Deeper <MdOutlineReadMore size={25}/></p>
          </p>
        </div>
        <div className="dispatch-image-container">
          <img src="/images/silhouette.jfif" alt="Profile" />
          <p className="dispatch-overlay-text">
            This is an inspirational quote for you to improve yourself and get
            better. Fight until the end. <p>Dig Deeper <MdOutlineReadMore size={25}/></p>
          </p>
        </div>
        <div className="dispatch-image-container">
          <img src="/images/silhouette.jfif" alt="Profile" />
          <p className="dispatch-overlay-text">
            This is an inspirational quote for you to improve yourself and get
            better. Fight until the end. <p>Dig Deeper <MdOutlineReadMore size={25}/></p>
          </p>
        </div>
      </div>

      
      <span>
        <h3>Recent Deployment</h3>
      </span>
    </div>
  );
}

export default HomePage;
