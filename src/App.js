import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">

      {/* <div className='app_body'>
        <Sidebar/>
        <Main />
      </div> */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
