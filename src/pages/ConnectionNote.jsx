import { useNavigate } from "react-router-dom";

const ConnectionNote = () => {
  const navigate = useNavigate();
  const handleConnectionPage = () => {
    navigate("/contact");
  };
  return (
    <div className="connectionNote-parent">
      <div onClick={handleConnectionPage}>Secure a Connection!</div>
      <p>
        ©2025 Joelinton, Inc. (Earl Morningstar). All Rights Reserved.
      </p>
    </div>
  );
};

export default ConnectionNote;
