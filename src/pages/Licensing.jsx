import { useEffect, useState } from "react";
import ConnectionNote from "./ConnectionNote";
import { useAOS } from "../context/AOSContext";
import { FaReact } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";

const Licensing = () => {
  const aos = useAOS();
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const componentId = "stack-page";

  useEffect(() => {
    const canAnimate = aos.refreshComponent(componentId);
    setShouldAnimate(canAnimate);
  }, [aos, componentId]);

  return (
    <>
      <div className="licensing-mainContainer">
        <h2 data-aos={shouldAnimate ? "fade-up" : ""} data-aos-delay="100">
          Licensing
        </h2>
        <div>
          <h3 data-aos={shouldAnimate ? "fade-up" : ""} data-aos-delay="200">
            Frontend Framework
          </h3>
          <p data-aos={shouldAnimate ? "fade-up" : ""} data-aos-delay="200">
            <FaReact size={14} />
            React
          </p>
          <h3 data-aos={shouldAnimate ? "fade-up" : ""} data-aos-delay="300">
            Typography
          </h3>
          <p data-aos={shouldAnimate ? "fade-up" : ""} data-aos-delay="300">
            <IoLogoGoogle size={14} />
            Google Fonts
          </p>
          <h3 data-aos={shouldAnimate ? "fade-up" : ""} data-aos-delay="400">
            Arsenal of Icons
          </h3>
          <p data-aos={shouldAnimate ? "fade-up" : ""} data-aos-delay="400">
            <FaReact size={14} />
            React Icons
          </p>
        </div>
      </div>
      <ConnectionNote />
    </>
  );
};

export default Licensing;
