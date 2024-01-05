import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../components/Login';
import App from '../App';
import ComplexForm from '../components/ComplexForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/complex-form',
        element: <ComplexForm />,
      },
    ],
  },
]);

export default router;
