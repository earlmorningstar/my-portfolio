import { useState } from "react";
import { createPortal } from "react-dom";
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
  const [isClosing, setIsClosing] = useState(false);

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        setIsDropdownOpen(false);
      }, 500);
    } else {
      setIsDropdownOpen(true);
    }
  };

  return (
    <>
      <nav id="main-nav-id" className="main-nav">
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/images/portfolio-handle-img.jpeg`}
              alt="Profile"
              className="profile-image"
            />
          </div>
          <div id="status-id" className="status">
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
            <MdHomeFilled size={16} /> Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlinks active" : "navlinks"
            }
            to="/about"
          >
            <CgProfile size={16} /> About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlinks active" : "navlinks"
            }
            to="/stack"
          >
            <SiDatabricks size={16} /> Stack
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlinks active" : "navlinks"
            }
            to="/project"
          >
            <PiWallLight size={16} /> Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlinks active" : "navlinks"
            }
            to="/contact"
          >
            <MdOutlineMail size={16} /> Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlinks active" : "navlinks"
            }
            to="/licensing"
          >
            <PiCopyrightLight size={16} /> Licensing
          </NavLink>
        </div>
      </nav>

      {(isDropdownOpen || isClosing) &&
        createPortal(
          <div
            className={`dropdown-nav-links-parent ${isClosing ? "closing" : ""}`}
          >
            <div className="nav-link-dropDown">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlinks active" : "navlinks"
                }
                to="/"
                onClick={toggleDropdown}
              >
                <MdHomeFilled size={16} /> Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlinks active" : "navlinks"
                }
                to="/about"
                onClick={toggleDropdown}
              >
                <CgProfile size={16} /> About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlinks active" : "navlinks"
                }
                to="/stack"
                onClick={toggleDropdown}
              >
                <SiDatabricks size={16} /> Stack
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlinks active" : "navlinks"
                }
                to="/project"
                onClick={toggleDropdown}
              >
                <PiWallLight size={16} /> Projects
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlinks active" : "navlinks"
                }
                to="/contact"
                onClick={toggleDropdown}
              >
                <MdOutlineMail size={16} /> Contact
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlinks active" : "navlinks"
                }
                to="/licensing"
                onClick={toggleDropdown}
              >
                <PiCopyrightLight size={16} /> Licensing
              </NavLink>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export default MainNavigation;
