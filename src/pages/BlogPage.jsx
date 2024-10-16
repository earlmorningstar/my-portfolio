import ConnectionNote from "./ConnectionNote";
import "./Index.css";
import { MdOutlineReadMore } from "react-icons/md";

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
            <div className="dispatch-image-container" key={index}>
              <img src={item.image} alt="Profile" />
              <p className="dispatch-overlay-text">
                {item.text}
                <p>
                  Dig Deeper <MdOutlineReadMore size={25} />
                </p>
              </p>
            </div>
          ))}
        </div>
      </div>
      <ConnectionNote />
    </>
  );
}

export default BlogPage;

// import "./Index.css";
// import { MdOutlineReadMore } from "react-icons/md";

// function BlogPage() {
//   return (
//     <div className="page-main-container">
//       <h3>Intel Briefings</h3>
//       <div className="latest-dispatch-container">
//         <div className="dispatch-image-container">
//           <img src="/images/silhouette.jfif" alt="Profile" />
//           <p className="dispatch-overlay-text">
//             This is an inspirational quote for you to improve yourself and get
//             better. Fight until the end.{" "}
//             <p>
//               Dig Deeper <MdOutlineReadMore size={25} />
//             </p>
//           </p>
//         </div>
//         <div className="dispatch-image-container">
//           <img src="/images/silhouette.jfif" alt="Profile" />
//           <p className="dispatch-overlay-text">
//             This is an inspirational quote for you to improve yourself and get
//             better. Fight until the end.{" "}
//             <p>
//               Dig Deeper <MdOutlineReadMore size={25} />
//             </p>
//           </p>
//         </div>
//         <div className="dispatch-image-container">
//           <img src="/images/silhouette.jfif" alt="Profile" />
//           <p className="dispatch-overlay-text">
//             This is an inspirational quote for you to improve yourself and get
//             better. Fight until the end.{" "}
//             <p>
//               Dig Deeper <MdOutlineReadMore size={25} />
//             </p>
//           </p>
//         </div>
//         <div className="dispatch-image-container">
//           <img src="/images/silhouette.jfif" alt="Profile" />
//           <p className="dispatch-overlay-text">
//             This is an inspirational quote for you to improve yourself and get
//             better. Fight until the end.{" "}
//             <p>
//               Dig Deeper <MdOutlineReadMore size={25} />
//             </p>
//           </p>
//         </div>
//         <div className="dispatch-image-container">
//           <img src="/images/silhouette.jfif" alt="Profile" />
//           <p className="dispatch-overlay-text">
//             This is an inspirational quote for you to improve yourself and get
//             better. Fight until the end.{" "}
//             <p>
//               Dig Deeper <MdOutlineReadMore size={25} />
//             </p>
//           </p>
//         </div>
//         <div className="dispatch-image-container">
//           <img src="/images/silhouette.jfif" alt="Profile" />
//           <p className="dispatch-overlay-text">
//             This is an inspirational quote for you to improve yourself and get
//             better. Fight until the end.{" "}
//             <p>
//               Dig Deeper <MdOutlineReadMore size={25} />
//             </p>
//           </p>
//         </div>
//         <div className="dispatch-image-container">
//           <img src="/images/silhouette.jfif" alt="Profile" />
//           <p className="dispatch-overlay-text">
//             This is an inspirational quote for you to improve yourself and get
//             better. Fight until the end.{" "}
//             <p>
//               Dig Deeper <MdOutlineReadMore size={25} />
//             </p>
//           </p>
//         </div>
//         <div className="dispatch-image-container">
//           <img src="/images/silhouette.jfif" alt="Profile" />
//           <p className="dispatch-overlay-text">
//             This is an inspirational quote for you to improve yourself and get
//             better. Fight until the end.{" "}
//             <p>
//               Dig Deeper <MdOutlineReadMore size={25} />
//             </p>
//           </p>
//         </div>
//         <div className="dispatch-image-container">
//           <img src="/images/silhouette.jfif" alt="Profile" />
//           <p className="dispatch-overlay-text">
//             This is an inspirational quote for you to improve yourself and get
//             better. Fight until the end.{" "}
//             <p>
//               Dig Deeper <MdOutlineReadMore size={25} />
//             </p>
//           </p>
//         </div>
//         <div className="dispatch-image-container">
//           <img src="/images/silhouette.jfif" alt="Profile" />
//           <p className="dispatch-overlay-text">
//             This is an inspirational quote for you to improve yourself and get
//             better. Fight until the end.{" "}
//             <p>
//               Dig Deeper <MdOutlineReadMore size={25} />
//             </p>
//           </p>
//         </div>
//         <div className="dispatch-image-container">
//           <img src="/images/silhouette.jfif" alt="Profile" />
//           <p className="dispatch-overlay-text">
//             This is an inspirational quote for you to improve yourself and get
//             better. Fight until the end.{" "}
//             <p>
//               Dig Deeper <MdOutlineReadMore size={25} />
//             </p>
//           </p>
//         </div>
//         <div className="dispatch-image-container">
//           <img src="/images/silhouette.jfif" alt="Profile" />
//           <p className="dispatch-overlay-text">
//             This is an inspirational quote for you to improve yourself and get
//             better. Fight until the end.{" "}
//             <p>
//               Dig Deeper <MdOutlineReadMore size={25} />
//             </p>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogPage;
