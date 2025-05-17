import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { MdHomeFilled, MdOutlineMail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SiDatabricks } from "react-icons/si";
import { PiWallLight, PiCopyrightLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import "./MainNavigation.css";

function MainNavigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav id="main-nav-id" className="main-nav">
        <div className="profile-section">
          <span>
            <img
              src="images/portfolio-handle-img.jpeg"
              alt="Profile"
              className="profile-image"
            />
          </span>

          <div id="status-id" className="status">
            {" "}
            <GoDotFill /> Available for Work
          </div>
        </div>

        <div className="hamburger-menu" onClick={toggleDropdown}>
          {isDropdownOpen ? (
            <RiCloseLargeFill size={30} color="#ffffff" />
          ) : (
            <RxHamburgerMenu size={30} color="#ffffff" />
          )}
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

          {/* <NavLink
            className={({ isActive }) =>
              isActive ? "navlinks active" : "navlinks"
            }
            to="/blog"
          >
            <LiaBlogSolid size={16} />
            Blog
          </NavLink> */}

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
      </nav>

      {isDropdownOpen && (
        <div className="dropdown-nav-links-parent">
          <div className="nav-link-dropDown">
            <NavLink
              className={({ isActive }) =>
              isActive ? "navlinks active" : "navlinks"
            }
              to="/" onClick={toggleDropdown}
            >
              <MdHomeFilled size={16} />
              Home
            </NavLink>

            {/* <NavLink
              className={({ isActive }) =>
                isActive ? "navlinks active" : "navlinks"
              }
              to="/blog" onClick={toggleDropdown}
            >
              <LiaBlogSolid size={16} />
              Blog
            </NavLink> */}

            <NavLink
              className={({ isActive }) =>
                isActive ? "navlinks active" : "navlinks"
              }
              to="/about" onClick={toggleDropdown}
            >
              <CgProfile size={16} />
              About
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "navlinks active" : "navlinks"
              }
              to="/stack" onClick={toggleDropdown}
            >
              <SiDatabricks size={16} />
              Stack
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "navlinks active" : "navlinks"
              }
              to="/project" onClick={toggleDropdown}
            >
              <PiWallLight size={16} />
              Projects
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "navlinks active" : "navlinks"
              }
              to="/contact" onClick={toggleDropdown}
            >
              <MdOutlineMail size={16} />
              Contact
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "navlinks active" : "navlinks"
              }
              to="/licensing" onClick={toggleDropdown}
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