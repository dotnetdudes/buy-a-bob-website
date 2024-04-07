import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Main";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import DetailPage from "./features/gallery/components/DetailPage";
import Admin from "./pages/Admin";
import GalleryMain from "./features/gallery/admin/GalleryMain";
import GalleryNew from "./features/gallery/admin/GalleryNew";
import AddressMain from "./features/addresses/admin/AddressMain/AddressMain";
import TagMain from "./features/tags/admin/TagMain/TagMain";
import StatusMain from "./features/status/admin/StatusMain";
import CategoryMain from "./features/categories/admin/CategoryMain";
import ShippingTypeMain from "./features/shippingtypes/admin/ShippingTypeMain/ShippingTypeMain";
import CartsMain from "./features/carts/admin/CartsMain/CartsMain";
import PrivateRoute from "./features/auth/components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "gallery", element: <Gallery /> },
      { path: "gallery/:id", element: <DetailPage /> },
      { path: "admin", element: <PrivateRoute component={Admin} /> },
      { path: "admin/gallery", element: <GalleryMain />},
      { path: "admin/gallery/new", element: <GalleryNew />},
      { path: "admin/address", element: <AddressMain />},
      { path: "admin/tag", element: <TagMain />},
      { path: "admin/status", element: <StatusMain />},
      { path: "admin/category", element: <CategoryMain />},
      { path: "admin/shipping", element: <ShippingTypeMain />},
      { path: "admin/carts", element: <CartsMain />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
