import { Outlet } from 'react-router';
import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
  const pathList = [
    {
      path: '/login',
      name: 'Login',
    },
    {
      path: '/complex-form',
      name: 'Complex Form',
    },
  ];
  return (
    <div className='bg-background-pattern'>
      <h1 className='text-center text-4xl font-bold text-primary mt-20 mb-10'>
        All examples
      </h1>
      {/* <Link to='/login' className='link-button'>
        Login
      </Link> */}
      <div className='flex gap-5 mb-10 items-center justify-center'>
        {pathList.map((path) => {
          return (
            <Link to={path.path} className='link-button' key={path.name}>
              {path.name}
            </Link>
          );
        })}
      </div>
      <div className='text-center text-white text-opacity-80 text-lg font-semibold mb-10'>
        To see the other examples, please click the links below.
      </div>
      <Outlet />
    </div>
  );
};

export default App;
