import "./App.css";
import Navbar from "./navbar";
import Home from "./Home";
import Create from "./create";
import BlogDetails from "./blogsDetails";
import ErrorPage from "./404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <Home />
        </>
      ),
    },
    {
      path: "/create",
      element: (
        <>
          <Navbar /> <Create />
        </>
      ),
    },
    {
      path: "/blogdetails/:id",
      element: (
        <>
          <Navbar /> <BlogDetails />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <Navbar /> <ErrorPage />
        </>
      ),
    },
    // Add more routes as needed
  ]);
  return (
    <div className="App">
      <div className="content">
        <>
          <RouterProvider router={router} />
        </>
      </div>
    </div>
  );
}
export default App;
