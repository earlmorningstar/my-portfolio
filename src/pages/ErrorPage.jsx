import { NavLink } from "react-router-dom";
import "./Index.css";

const ErrorPage = () => {
  return (
    <>
      <main className="error-page-main">
        <h1>An error occured!!</h1>
        <p>Could not find this page.</p>
        <NavLink to="/">
          <button className="errorPage-btn">Home</button>
        </NavLink>
      </main>
    </>
  );
};

export default ErrorPage;
