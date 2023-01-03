import './App.scss';
import Header from './components/header/header';
import { Link } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <button className='btn btn-dark'>
          <Link to="/admin"> Go Admin</Link>
        </button>
        <button className='btn btn-dark'>
          <Link to="/user">Go User</Link>
        </button>
      </div>
    </div>
  );
}

export default App;
