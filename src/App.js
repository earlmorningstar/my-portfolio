import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
// import BlogPage from "./pages/BlogPage";
import About from "./pages/About";
import StackPage from "./pages/StackPage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Licensing from "./pages/Licensing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "blog", element: <BlogPage /> },
      { path: "about", element: <About /> },
      { path: "stack", element: <StackPage /> },
      { path: "project", element: <Projects /> },
      { path: "contact", element: <Contact /> },
      { path: "licensing", element: <Licensing /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
