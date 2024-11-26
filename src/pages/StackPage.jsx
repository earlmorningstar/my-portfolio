import ConnectionNote from "./ConnectionNote";

export const techItems = [
  {
    image: "/images/react-img-removebg-preview.png",
    title: "React",
    subtitle: "JavaScript Library",
    description:
      "React is a JavaScript library for building user interfaces, known for its component-based architecture and efficient state management, enabling fast, interactive, and scalable web applications..",
  },
  {
    image: "/images/javascript.jpg",
    title: "JavaScript",
    subtitle: "Programming Language",
    description:
      "JavaScript is a high-level, interpreted language that supports event-driven, functional, and imperative programming styles.",
  },
  {
    image: "/images/typescript.jpg",
    title: "typescript",
    subtitle: "Programming Language",
    description:
      "TypeScript is a programming language that enhances JavaScript by introducing optional static types, improving code quality and maintainability.",
  },
  {
    image: "/images/nodejs.png",
    title: "Node.js",
    subtitle: "JavaScript Runtime",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine, allowing developers to run JavaScript on the server-side for building scalable and high-performance applications.",
  },
  {
    image: "/images/mongodb.png",
    title: "MongoDB",
    subtitle: "Database",
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it easy to scale and handle large volumes of unstructured data.",
  },
  {
    image: "/images/tailwind-removebg-preview.png",
    title: "Tailwind CSS",
    subtitle: "CSS Framework",
    description:
      "Tailwind CSS is a utility-first CSS framework that provides a set of low-level utility classes for designing custom, responsive user interfaces quickly and efficiently without writing traditional CSS.",
  },
];

function StackPage() {
  return (
    <>
      <div className="stackpage-main-container">
        <h3>My Tech Kit</h3>
        <div className="tech-kit-Parent">
          {techItems.map((item, index) => (
            <div className="each-tech-kit" key={index}>
              <span>
                <img
                  src={item.image}
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

      <ConnectionNote />
    </>
  );
}

export default StackPage;
