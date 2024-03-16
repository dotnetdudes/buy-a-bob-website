import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Main";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import DetailPage from "./features/gallery/components/DetailPage";
import Admin from "./pages/Admin";
import GalleryMain from "./features/gallery/admin/GalleryMain";
import GalleryNew from "./features/gallery/admin/GalleryNew";
import AddressMain from "./features/addresses/admin/AddressMain/AddressMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "gallery", element: <Gallery /> },
      { path: "gallery/:id", element: <DetailPage /> },
      { path: "admin", element: <Admin />},
      { path: "admin/gallery", element: <GalleryMain />},
      { path: "admin/gallery/new", element: <GalleryNew />},
      { path: "admin/address", element: <AddressMain />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
