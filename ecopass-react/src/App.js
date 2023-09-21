import './App.css';
import Navbar from './components/Navbar';
import MisionYVision from './components/Misionyvision';
import RegisterModal from './components/RegisterModal';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <MisionYVision/>
    <RegisterModal/>
    </div>
  );
}

export default App;
