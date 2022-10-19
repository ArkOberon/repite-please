import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../components/Layout";
import Producto from "../pages/producto";
import NuevoProducto from "../pages/nuevo-producto"

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/producto',
        element: <Producto />
      },
      {
        path: '/nuevo-producto',
        element: <NuevoProducto />
      }
    ]
  }
])
 
export default routes;