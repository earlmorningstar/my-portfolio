import { useEffect, useState } from "react";
import ConnectionNote from "./ConnectionNote";
import { useAOS } from "../context/AOSContext";
import { IoLocationSharp } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";

const About = () => {
  const aos = useAOS();
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const componentId = "stack-page";

  useEffect(() => {
    const canAnimate = aos.refreshComponent(componentId);
    setShouldAnimate(canAnimate);
  }, [aos, componentId]);

  return (
    <>
      <div className="aboutpage-main-container">
        <span className="aboutpage-headers-holder">
          <h4>Service Overview</h4>
          <h2 data-aos={shouldAnimate ? "fade-up" : ""} data-aos-delay="100">
            Joel Onyeabor???
          </h2>
          <h5 data-aos={shouldAnimate ? "fade-up" : ""} data-aos-delay="200">
            Just an enthusiastic developer passionate about coding,
            problem-solving, and the mind.
          </h5>
        </span>

        <div
          className="aboutpage-note"
          data-aos={shouldAnimate ? "fade-up" : ""}
          data-aos-delay="300"
        >
          {" "}
          <p>
            {" "}
            I'm a software engineer specialising in frontend and full-stack
            development, with deep experience across JavaScript, TypeScript,
            React, Next.js, and React Native. I build things that work well
            and feel right; whether that's a responsive web application, a
            cross-platform mobile app, or a tool that solves a problem nobody
            else has tackled yet.
          </p>{" "}
          <p>
            {" "}
            My approach to development is deliberate. I care about clean
            architecture, readable code, and user experiences that don't get
            in the way. I'm comfortable across the full stack; from
            designing component systems in React to building APIs in Node.js
            and Express, structuring databases in MongoDB and Supabase, and
            shipping production-ready applications end to end.{" "}
          </p>{" "}
          <p>
            {" "}
            Beyond web and mobile, I've built AI-powered software - most
            notably KAIROS Dreamweaver, an always-on ambient AI coding
            companion that runs in the system tray, watches your project
            folders, and generates intelligent reports about your code
            overnight. It's open source and represents the kind of work I
            find most rewarding: original ideas, shipped cleanly, solving
            real problems.{" "}
          </p>{" "}
          <p>
            {" "}
            I stay current by building constantly, reading widely, and paying
            attention to where the industry is heading. I'm always refining
            my craft and looking for meaningful work that pushes me further.{" "}
          </p>{" "}

        </div>
        <span>
          <IoLocationSharp color="#4de6a6" />
          <p>Lagos, Nigeria</p>
        </span>

        <hr className="pagebreak" />

        <section className="aboutpage-detailParent">
          <h3>Stack</h3>
          <div className="aboutpage-note">
            <p>
              My core stack is JavaScript and TypeScript across the full
              spectrum; React and Next.js on the web, React Native and Expo
              on mobile, Node.js and Express.js on the backend, and MongoDB
              and Supabase for data. I style with Tailwind CSS and care
              deeply about the details that make interfaces feel polished.
              Outside the JavaScript ecosystem I've built production software
              in Python, integrating AI models and working with system-level
              APIs. Every tool I use, I use with intent.
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
};

export default About;
