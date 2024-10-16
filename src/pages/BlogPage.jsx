import ConnectionNote from "./ConnectionNote";
import DispatchItem from "./DispatchItem";
import "./Index.css";

function BlogPage() {
  const dispatchItems = Array(12).fill({
    image: "/images/silhouette.jfif",
    text: "This is an inspirational quote for you to improve yourself and get better. Fight until the end.",
  });

  return (
    <>
      <div className="blogpage-main-container">
        <h3>Intel Briefings</h3>
        <div className="latest-dispatch-container">
          {dispatchItems.map((item, index) => (
            <DispatchItem key={index} image={item.image} text={item.text} />
          ))}
        </div>
      </div>
      <ConnectionNote />
    </>
  );
}

export default BlogPage;
