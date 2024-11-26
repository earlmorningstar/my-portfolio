import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Fallback from "./components/Fallback";

const RootLayout = lazy(() => import("./pages/RootLayout"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
// const BlogPage = lazy(() => import ("./pages/BlogPage"));
const About = lazy(() => import("./pages/About"));
const StackPage = lazy(() => import("./pages/StackPage"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Licensing = lazy(() => import("./pages/Licensing"));

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
      <Suspense fallback={<Fallback />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
