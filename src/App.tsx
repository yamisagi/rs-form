import { Outlet } from 'react-router';
import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='bg-background-pattern'>
      <h1 className='text-center text-4xl font-bold text-primary mt-20 mb-10'>
        All examples
      </h1>
      <Link
        to='/login'
        className='link-button'
      >
        Login
      </Link>
      <Outlet />
    </div>
  );
};

export default App;
