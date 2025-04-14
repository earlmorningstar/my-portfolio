import ConnectionNote from "./ConnectionNote";
import { FaReact } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";

const Licensing = () => {
  return (
    <>
      <div className="licensing-mainContainer">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Licensing
        </h2>
        <div>
          <h3 data-aos="fade-up" data-aos-delay="200">
            Frontend Framework
          </h3>
          <p data-aos="fade-up" data-aos-delay="200">
            <FaReact size={14} />
            React
          </p>
          <h3 data-aos="fade-up" data-aos-delay="300">
            Typography
          </h3>
          <p data-aos="fade-up" data-aos-delay="300">
            <IoLogoGoogle size={14} />
            Google Fonts
          </p>
          <h3 data-aos="fade-up" data-aos-delay="400">
            Arsenal of Icons
          </h3>
          <p data-aos="fade-up" data-aos-delay="400">
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
