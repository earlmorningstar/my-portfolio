import { useEffect, useState } from "react";
import ConnectionNote from "./ConnectionNote";
import { useAOS } from "../context/AOSContext";

const techCategories = [
  {
    category: "Languages",
    items: [
      {
        image: "images/javascript.jpg",
        title: "JavaScript",
        subtitle: "Programming Language",
        description:
          "JavaScript is a versatile, high-level programming language used to create dynamic and interactive web applications across both client-side and server-side environments.",
      },
      {
        image: "images/typescript.jpg",
        title: "TypeScript",
        subtitle: "Programming Language",
        description:
          "TypeScript is a statically typed superset of JavaScript that enhances code reliability, maintainability, and developer productivity.",
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        image: "images/react-img-removebg-preview.png",
        title: "React",
        subtitle: "JavaScript Library",
        description:
          "React is a JavaScript library for building modern user interfaces using reusable components, enabling fast, interactive, and scalable web applications.",
      },
      {
        image: "images/nextjs.jpg",
        title: "Next.js",
        subtitle: "React Framework",
        description:
          "Next.js is a React framework for building fast, production-ready web applications with features such as server-side rendering, static site generation, API routes, and optimized performance.",
      },
      {
        image: "images/tailwind-removebg-preview.png",
        title: "Tailwind CSS",
        subtitle: "Utility-First CSS Framework",
        description:
          "Tailwind CSS is a utility-first CSS framework that enables rapid development of responsive and highly customizable user interfaces directly within HTML and JSX.",
      },
    ],
  },
  {
    category: "Mobile",
    items: [
      {
        image: "images/react-native-3d.png",
        title: "React Native",
        subtitle: "Cross-Platform Mobile Framework",
        description:
          "React Native is a framework for building native mobile applications using JavaScript and React, enabling developers to create apps for both Android and iOS from a single codebase.",
      },
      {
        image: "images/expoImg.png",
        title: "Expo",
        subtitle: "React Native Development Platform",
        description:
          "Expo is a development platform and toolchain built on top of React Native that simplifies mobile app development, testing, deployment, and access to native device features.",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        image: "images/nodejs.png",
        title: "Node.js",
        subtitle: "JavaScript Runtime",
        description:
          "Node.js is a JavaScript runtime built on Chrome's V8 engine that enables server-side development of scalable and high-performance applications.",
      },
      {
        image: "images/express-9d.png",
        title: "Express.js",
        subtitle: "Web Framework",
        description:
          "Express.js is a lightweight and flexible Node.js web framework used for building web applications, REST APIs, and backend services.",
      },
    ],
  },
  {
    category: "Database & Backend Services",
    items: [
      {
        image: "images/mongodb.png",
        title: "MongoDB",
        subtitle: "NoSQL Database",
        description:
          "MongoDB is a document-oriented NoSQL database that stores data in flexible JSON-like documents, making it well-suited for scalable modern applications.",
      },
      {
        image: "images/supabase.png",
        title: "Supabase",
        subtitle: "Backend-as-a-Service",
        description:
          "Supabase is an open-source Backend-as-a-Service platform that provides a PostgreSQL database, authentication, real-time subscriptions, storage, and serverless functions for building modern applications.",
      },
    ],
  },
];

export const techItems = techCategories.flatMap((c) => c.items);

const StackPage = () => {
  const aos = useAOS();
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const componentId = "stack-page";

  useEffect(() => {
    const canAnimate = aos.refreshComponent(componentId);
    setShouldAnimate(canAnimate);
  }, [aos, componentId]);

  return (
    <>
      <div className="stackpage-main-container">
        <h3 data-aos={shouldAnimate ? "fade-up" : ""} data-aos-delay="100">
          My Tech Kit
        </h3>

        {techCategories.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="tech-category-group"
            data-aos={shouldAnimate ? "fade-up" : ""}
            data-aos-delay={100 + groupIndex * 100}
          >
            <h4 className="tech-category-heading">{group.category}</h4>
            <div className="tech-kit-Parent">
              {group.items.map((item, index) => (
                <div className="each-tech-kit" key={index}>
                  <span>
                    <img
                      src={`${process.env.PUBLIC_URL}/${item.image}`}
                      alt={item.title}
                      className="stack-image"
                    />
                  </span>
                  <div className="each-tech-info">
                    <span>
                      <h3 id="stack-title">{item.title}</h3>
                      <p id="stack-fs-id">{item.subtitle}</p>
                    </span>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ConnectionNote />
    </>
  );
};

export default StackPage;