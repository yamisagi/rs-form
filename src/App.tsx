import { Outlet } from 'react-router';
import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='bg-background-pattern'>
      <h1 className='text-center text-4xl font-bold text-primary mt-20 mb-10'>
        All examples
      </h1>
      <Link to='/login' className='link-button'>
        Login
      </Link>
      <div className='text-center text-white text-opacity-80 text-lg font-semibold mb-10'>
        To see the other examples, please click the links below.
      </div>
      <Outlet />
    </div>
  );
};

export default App;
