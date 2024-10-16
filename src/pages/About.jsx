import { IoLocationSharp } from "react-icons/io5";
import { PiDesktopTowerFill } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";
import ConnectionNote from "./ConnectionNote";

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
        <p>
          I’m a Front-End Developer with a strong foundation in JavaScript,
          React, CSS, Node.js, and Git, among other technologies. I thrive on
          the challenge of creating user-friendly interfaces that not only meet
          client specifications but also enhance user experience. My coding
          journey is driven by a desire to continuously learn and innovate,
          allowing me to contribute positively to any project.
        </p>
        <p>
          Problem-solving is at the heart of what I do. I relish the process of
          dissecting complex challenges and developing elegant, efficient
          solutions. Whether it's debugging code or optimizing performance, I
          approach every task with a tenacity that pushes me to explore all
          possible avenues. My proficiency in Figma allows me to bridge the gap
          between design and implementation, ensuring that every pixel aligns
          with the vision while maintaining functionality.
        </p>
        <p>
          In addition to my technical skills, I am an avid reader and
          researcher. I believe that staying informed about the latest trends in
          technology and design is essential for a successful developer. This
          habit not only fuels my creativity but also equips me to make informed
          decisions that benefit both the team and the end-user. I’m constantly
          seeking knowledge, whether it’s through online courses, workshops, or
          reading the latest industry articles.
        </p>
        <p>
          Fitness is a cornerstone of my life; I take it seriously and
          prioritize it daily. I believe that a healthy body fosters a sharp
          mind, and I carry this philosophy into my work. My dedication to
          fitness translates into my professional life, where I strive for
          excellence and encourage those around me to reach their full
          potential. As a team member, I’m committed to supporting my
          colleagues, sharing insights, and cultivating a collaborative
          environment where everyone can thrive.
        </p>
        <p>
          I am excited about the opportunity to contribute my skills and passion
          to a dynamic team. With my technical expertise and problem-solving
          mindset, I am eager to tackle new challenges, learn from others, and
          help drive innovative solutions that make a difference.
        </p>
      </div>

      <span>
        <IoLocationSharp color="#4de6a6" />
        <p>Lagos, Nigeria</p>
      </span>

      <hr className="pagebreak"/>

      <section className="aboutpage-detailParent">
        <h3>Experience</h3>

        <div id="aboutpage-detailHolder">
          <h3>
            <PiDesktopTowerFill size={16} color="#999999" />
            Frontend Software Engineer
          </h3>
          <p>Fiver Contract, Start Date- End Date</p>
        </div>

        <div id="aboutpage-detailHolder">
          <h3>
            <PiDesktopTowerFill size={16} color="#999999" />
            Frontend Software Engineer
          </h3>
          <p>Fiver Contract, Start Date- End Date</p>
        </div>

        <div id="aboutpage-detailHolder">
          <h3>
            <PiDesktopTowerFill size={16} color="#999999" />
            Frontend Software Engineer
          </h3>
          <p>Fiver Contract, Start Date- End Date</p>
        </div>
      </section>

      <hr className="pagebreak"/>

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

      <hr className="pagebreak"/>

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
          <p>Certificate in Front-End Development, 2021 - 2022</p>
        </div>

      </section>

      <hr className="pagebreak"/>
    </div>
    <ConnectionNote />
    </>
  );
}

export default About;
