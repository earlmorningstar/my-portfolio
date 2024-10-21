import { IoLocationSharp } from "react-icons/io5";
import { PiDesktopTowerFill } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";
import ConnectionNote from "./ConnectionNote";
import { PiDotBold } from "react-icons/pi";

function About() {
  return (
    <>
      <div className="aboutpage-main-container">
        <span className="aboutpage-headers-holder">
          <h4>Service Overview</h4>
          <h2>Who is Joel Onyeabor?</h2>
          <h5>
            Just an enthusiastic developer passionate about coding,
            problem-solving, the mind, and fitness.
          </h5>
        </span>

        <div className="aboutpage-note">
          {" "}
          <p>
            {" "}
            I’m a Front-End Developer with a robust foundation in JavaScript,
            React, CSS, Node.js, Next.js, Git and more, complemented by my background as an
            Accounting graduate. This unique blend of finance and technology
            empowers me to create user-friendly interfaces that enhance the user
            experience while meeting client specifications. My passion for web
            development has driven me to continuously learn and innovate,
            enabling me to contribute positively to any project.{" "}
          </p>{" "}
          <p>
            {" "}
            With a keen eye for detail and a strong understanding of financial
            principles, I bridge the gap between finance and technology. I
            approach problem-solving with tenacity, relishing the challenge of
            dissecting complex issues and crafting elegant, efficient solutions.
            My proficiency in Figma ensures that I can align design and
            implementation, maintaining functionality while ensuring every pixel
            reflects the intended vision.{" "}
          </p>{" "}
          <p>
            {" "}
            I am an avid reader and researcher, committed to staying informed
            about the latest trends in technology and design. This habit fuels
            my creativity and equips me to make informed decisions that benefit
            both the team and end-users. I’m constantly seeking knowledge
            through online courses, workshops, and the latest industry articles,
            all of which enrich my professional journey.{" "}
          </p>{" "}
          <p>
            {" "}
            Fitness is a cornerstone of my life, as I believe a healthy body
            fosters a sharp mind. This philosophy translates into my
            professional life, where I strive for excellence and encourage those
            around me to reach their full potential. As a collaborative team
            member, I am dedicated to supporting my colleagues, sharing
            insights, and cultivating an environment where everyone can thrive.{" "}
          </p>{" "}
          <p>
            {" "}
            I am excited about the opportunity to apply my diverse skill set and
            passion for both accounting and web development to a dynamic team.
            With my technical expertise and analytical mindset, I am eager to
            tackle new challenges, learn from others, and drive innovative
            solutions that make a difference in the tech landscape.{" "}
          </p>{" "}
        </div>
        <span>
          <IoLocationSharp color="#4de6a6" />
          <p>Lagos, Nigeria</p>
        </span>

        <hr className="pagebreak" />

        <section className="aboutpage-detailParent">
          <h3>Experience</h3>

          {/* <div id="aboutpage-detailHolder">
            <h3>
              <PiDesktopTowerFill size={16} color="#999999" />
              Frontend Software Engineer
            </h3>
            <p>Fiver Contract, Start Date- End Date</p>
          </div> */}

          <div id="aboutpage-detailHolder">
            <h3>
              <PiDesktopTowerFill size={16} color="#999999" />
              Junior Frontend Software Engineer
            </h3>
            <p>Crossover<PiDotBold /> Contract, Dec 2023 - Aug 2024</p>
          </div>

          <div id="aboutpage-detailHolder">
            <h3>
              <PiDesktopTowerFill size={16} color="#999999" />
              Junior Frontend Engineer
            </h3>
            <p>Fiver<PiDotBold /> Contract, Feb 2023 - Oct 2023</p>
          </div>
        </section>

        <hr className="pagebreak" />

        <section className="aboutpage-detailParent">
          <h3>Stack</h3>

          <div className="aboutpage-note">
            <p>
              I possess a robust skill set in JavaScript, React, CSS, Node.js,
              Git, and more, empowering me to develop dynamic web applications
              characterized by responsive designs and outstanding user
              experiences. My commitment lies in delivering high-performance
              solutions that seamlessly integrate functionality with a refined
              aesthetic, ensuring that every project I undertake contributes
              meaningful value to the team.
            </p>
          </div>
        </section>

        <hr className="pagebreak" />

        <section className="aboutpage-detailParent">
          <h3>Education</h3>

          <div id="aboutpage-detailHolder">
            <h3>
              <MdCastForEducation size={16} color="#999999" />
              B.Sc. in Accounting
            </h3>
            <p>University of Nigeria, Enugu Campus, 2017 - 2021</p>
          </div>

          <div id="aboutpage-detailHolder">
            <h3>
              <MdCastForEducation size={16} color="#999999" />
              Axia Africa School Of Engineering
            </h3>
            <p>Certificate in Front-End Development, Dec 2021 - Sept 2022</p>
          </div>
        </section>

        <hr className="pagebreak" />
      </div>
      <ConnectionNote />
    </>
  );
}

export default About;
