import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectItems } from "./Projects";
import { IoMdArrowForward } from "react-icons/io";
import { techItems } from "./StackPage";
import ConnectionNote from "./ConnectionNote";
import { useAOS } from "../context/AOSContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Index.css";

const HomePage = () => {
  const [slidersInitialized, setSlidersInitialized] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const navigate = useNavigate();
  const aos = useAOS();
  const componentId = "home-page";

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

  const handleProfilePage = () => {
    navigate("/project");
  };

  return (
    <>
      <div className="homepage-main-container">
        <span
          id="hp-mainContainer-span-id"
          data-aos={shouldAnimate ? "fade-up" : ""}
          data-aos-delay="100"
        >
          <h3>Hey, I'm Joel,</h3>
          <h4>
            I'm a frontend web developer passionate about building intuitive,
            real-world solutions. I’ve explored backend development out of
            curiosity and to bring my personal projects to life. Always
            learning, always creating.
          </h4>
        </span>
        <div
          className="homepage-nav-btn"
          data-aos={shouldAnimate ? "fade-up" : ""}
          data-aos-delay="200"
        >
          <h3>Notable Projects</h3>
          <button onClick={handleProfilePage}>View All Projects</button>
        </div>

        <div
          className="projects-parent"
          data-aos={shouldAnimate ? "fade-up" : ""}
          data-aos-delay="300"
        >
          {projectItems.slice(0, 3).map((item, index) => (
            <>
              <div className="project-info-parent">
                <h3>{item.title}</h3>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="project-holder-link"
              >
                <div className="project-holder">
                  <aside className="project-image-holder">
                    {renderProjectImage(item)}
                  </aside>
                  <div className="project-info-parent">
                    <h4 id="homepage-proj-type">
                      {item.projectType} <IoMdArrowForward size={25} />
                    </h4>
                  </div>
                </div>
              </a>
            </>
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
};

export default HomePage;
