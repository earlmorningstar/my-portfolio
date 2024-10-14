import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./MainNavigation.css";
import { GoDotFill } from "react-icons/go";
import { MdHomeFilled } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { SiDatabricks } from "react-icons/si";
import { PiWallLight } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { PiCopyrightLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";

function MainNavigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="main-nav">
        <div className="profile-section">
          <span>
            <img
              src="/images/passport.jpg"
              alt="Profile"
              className="profile-image"
            />
          </span>

          <div className="status">
            {" "}
            <GoDotFill /> Available for Work
          </div>
        </div>

        <div className="nav-links-parent">
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlinks active" : "navlinks"
            }
            to="/"
          >
            <MdHomeFilled size={16} />
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "navlinks active" : "navlinks"
            }
            to="/blog"
          >
            <LiaBlogSolid size={16} />
            Blog
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "navlinks active" : "navlinks"
            }
            to="/about"
          >
            <CgProfile size={16} />
            About
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "navlinks active" : "navlinks"
            }
            to="/stack"
          >
            <SiDatabricks size={16} />
            Stack
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "navlinks active" : "navlinks"
            }
            to="/project"
          >
            <PiWallLight size={16} />
            Projects
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "navlinks active" : "navlinks"
            }
            to="/contact"
          >
            <MdOutlineMail size={16} />
            Contact
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "navlinks active" : "navlinks"
            }
            to="/licensing"
          >
            <PiCopyrightLight size={16} />
            Licensing
          </NavLink>
        </div>

        <div className="hamburger-menu" onClick={toggleDropdown}>
          {isDropdownOpen ? (
            <RiCloseLargeFill size={35} color="#c9ce8c" />
          ) : (
            <RxHamburgerMenu size={35} color="#c9ce8c" />
          )}
        </div>
      </nav>

      {isDropdownOpen && (
        <div className="dropdown-nav-links-parent">
          <div className="nav-link-dropDown">
            <NavLink
              className="root-nav-dropDown"
              to="/"
            >
              <MdHomeFilled size={16} />
              Home
            </NavLink>

            <NavLink
              className="root-nav-dropDown"
              to="/blog"
            >
              <LiaBlogSolid size={16} />
              Blog
            </NavLink>

            <NavLink
              className="root-nav-dropDown"
              to="/about"
            >
              <CgProfile size={16} />
              About
            </NavLink>

            <NavLink
              className="root-nav-dropDown"
              to="/stack"
            >
              <SiDatabricks size={16} />
              Stack
            </NavLink>

            <NavLink
              className="root-nav-dropDown"
              to="/project"
            >
              <PiWallLight size={16} />
              Projects
            </NavLink>

            <NavLink
              className="root-nav-dropDown"
              to="/contact"
            >
              <MdOutlineMail size={16} />
              Contact
            </NavLink>

            <NavLink
              className="root-nav-dropDown"
              to="/licensing"
            >
              <PiCopyrightLight size={16} />
              Licensing
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default MainNavigation;

//  {/* <div className={`nav-links-parent ${isDropdownOpen ? "show" : ""}`}>
//         <span>
//           <NavLink className="navlinks" to="/">
//             <MdHomeFilled size={16} /> Home
//           </NavLink>
//         </span>
//         <span>
//           <NavLink className="navlinks" to="/blog">
//             <LiaBlogSolid size={16} /> Blog
//           </NavLink>
//         </span>
//         <span>
//           <NavLink className="navlinks" to="/about">
//             <CgProfile size={16} /> About
//           </NavLink>
//         </span>
//         <span>
//           <NavLink className="navlinks" to="/stack">
//             <SiDatabricks size={16} /> Stack
//           </NavLink>
//         </span>
//         <span>
//           <NavLink className="navlinks" to="/project">
//             <PiWallLight size={16} /> Projects
//           </NavLink>
//         </span>
//         <span>
//           <NavLink className="navlinks" to="/contact">
//             <MdOutlineMail size={16} /> Contact
//           </NavLink>
//         </span>
//         <span>
//           <NavLink className="navlinks" to="/licensing">
//             <PiCopyrightLight size={16} /> Licensing
//           </NavLink>
//         </span>
//       </div> */}
