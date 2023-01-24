import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="app">

      <div className='app_body'>
        <Sidebar/>
        <Main />
      </div>
      
    </div>
  );
}

export default App;
