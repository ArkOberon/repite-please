import { createBrowserRouter } from 'react-router-dom'

import Layout from '../components/Layout'
import Productos from '../pages/productos';
import Nuevo from '../pages/nuevo';
import Editar from '../pages/editar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Productos />
      },
      {
        path: '/productos/nuevo',
        element: <Nuevo />
      },
      {
        path: '/productos/editar/:id',
        element: <Editar />
      }
    ]
  }
])
 
export default router;