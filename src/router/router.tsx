import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../components/Login';
import App from '../App';
import ComplexForm from '../components/ComplexForm';
import LoginValidate from '../components/LoginValidate';

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
      {
        path: '/login-validate',
        element: <LoginValidate />,
      },
    ],
  },
]);

export default router;
