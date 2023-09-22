import './App.css';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import Routing from './components/Routing';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
        <Routing/>
    </div>
  );
}

export default App;
