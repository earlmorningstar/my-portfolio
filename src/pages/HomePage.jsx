import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectItems } from "./Projects";
import { IoMdArrowForward } from "react-icons/io";
import { techItems } from "./StackPage";
import ConnectionNote from "./ConnectionNote";
// import DispatchItem from "./DispatchItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Index.css";

function HomePage() {
  const [slidersInitialized, setSlidersInitialized] = useState(false);
  const navigate = useNavigate();
  // const dispatchItems = Array(12).fill({
  //   image: "/images/silhouette.jfif",
  //   text: "This is an inspirational quote for you to improve yourself and get better. Fight until the end.",
  // });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlidersInitialized(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

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
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
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
        <span id="hp-mainContainer-span-id">
          <h3>Hey, I'm Joel,</h3>
          <h4>
            I'm a frontend web developer and writer passionate about technology,
            creativity, and building meaningful connections through code and
            words.
          </h4>
        </span>
        {/* <span>
          <h3>Recent Dispatch</h3>
        </span> */}

        {/* <div className="latest-dispatch-container">
          {dispatchItems.slice(0, 3).map((item, index) => (
            <DispatchItem key={index} image={item.image} text={item.text} />
          ))}
        </div> */}

        <div className="homepage-nav-btn">
          <h3>Notable Projects</h3>
          <button onClick={handleProfilePage}>View All Projects</button>
        </div>

        <div className="projects-parent">
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
}

export default HomePage;
