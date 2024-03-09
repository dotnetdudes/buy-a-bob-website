import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Main";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import DetailPage from "./features/gallery/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/gallery/:id", element: <DetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
