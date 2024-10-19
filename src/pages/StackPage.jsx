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
    image: "/images/nextjs.jpg",
    title: "Next.js",
    subtitle: "React Framework",
    description:
      "Next.js is a React framework that provides advanced features like server-side rendering and static site generation, enhancing React-based web applications with improved performance and SEO capabilities.",
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
