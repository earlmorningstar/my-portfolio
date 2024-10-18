import ConnectionNote from "./ConnectionNote";

export const techItems = [
  {
    image: "/images/nextjs.jpg",
    title: "Next.js",
    subtitle: "React Framework",
    description: "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.",
  },
  {
    image: "/images/nextjs.jpg",
    title: "Next.js",
    subtitle: "React Framework",
    description: "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.",
  },
  {
    image: "/images/nextjs.jpg",
    title: "Next.js",
    subtitle: "React Framework",
    description: "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.",
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