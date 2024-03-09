import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Main";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
