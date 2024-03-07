import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Main";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
