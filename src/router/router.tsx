import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../components/Login';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
