import './App.scss';
import Header from './components/header/header';
import { Outlet } from "react-router-dom";
//Luyenhaidang

const App = () => {
  return (
    <div className="App">
      <div className='header'>
        <Header></Header>
      </div>
      <div className='main-content'>
        <div className='page-content'>
          <Outlet></Outlet>
        </div>
      </div>
      <div className='footer'>

      </div>

      {/* <div>
        <button className='btn btn-dark'>
          <Link to="/admin"> Go Admin</Link>
        </button>
        <button className='btn btn-dark'>
          <Link to="/user">Go User</Link>
        </button>
      </div> */}
    </div>
  );
}

export default App;
