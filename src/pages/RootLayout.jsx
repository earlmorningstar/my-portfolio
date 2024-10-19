import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import ScrollToTop from "../components/ScrollToTop";
import "./Index.css";

function RootLayout() {
  return (
    <div className="root-layout-container">
      <ScrollToTop />
      <aside className="sidebar">
        <MainNavigation />
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
