import ConnectionNote from "./ConnectionNote";
import { FaReact } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";

function Licensing() {
  return<>
  <div className="licensing-mainContainer">
    <h2>Licensing</h2>
    <div>
      <h3>Frontend Framwork</h3>
      <p><FaReact size={14}/>React</p>
      <h3>Arsenal of Icons</h3>
      <p><FaReact size={14}/>React Icons</p>
      <h3>Typography</h3>
      <p><IoLogoGoogle size={14}/>Google Fonts</p>
    </div>

  </div>
  <ConnectionNote />
  </>
}

export default Licensing;
