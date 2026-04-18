import "./Fallback.css";

const Fallback = () => (
  <div className="fallback-container">
    <div className="fallback-inner">
      <div className="fallback-bars">
        <span className="bar" style={{ animationDelay: "0s" }} />
        <span className="bar" style={{ animationDelay: "0.12s" }} />
        <span className="bar" style={{ animationDelay: "0.24s" }} />
        <span className="bar" style={{ animationDelay: "0.36s" }} />
        <span className="bar" style={{ animationDelay: "0.48s" }} />
      </div>
      <p className="fallback-label">Joel Onyeabor</p>
    </div>
  </div>
);

export default Fallback;