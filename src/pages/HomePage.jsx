import "./Index.css";
import DispatchItem from "./DispatchItem";

function HomePage() {
  
  const dispatchItems = Array(12).fill({
    image: "/images/silhouette.jfif",
    text: "This is an inspirational quote for you to improve yourself and get better. Fight until the end.",
  });

  return (
    <div className="homepage-main-container">
      <span>
        <h3>Hey, I'm Joel,</h3>
        <h4>
          I'm a software developer and writer passionate about technology,
          creativity, and building meaningful connections through code and
          words.
        </h4>
      </span>

      <span>
        <h3>Recent Dispatch</h3>
      </span>

      <div className="latest-dispatch-container">
        {dispatchItems.slice(0, 3).map((item, index) => (
          <DispatchItem key={index} image={item.image} text={item.text} />
        ))}
      </div>

      <span>
        <h3>Recent Deployment</h3>
      </span>
    </div>
  );
}

export default HomePage;
