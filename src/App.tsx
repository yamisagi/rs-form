import { Outlet } from 'react-router';
import './App.css';
import { Link } from 'react-router-dom';
import pathList from './constants/links';

const App = () => {
  return (
    <div className='bg-background-pattern'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-center text-4xl font-bold text-primary mt-20 mb-10'>
          All examples
        </h1>
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
    </div>
  );
};

export default App;
