import './App.css';
import Navbar from './components/Navbar';
import MisionYVision from './components/Misionyvision';
import RegisterModal from './components/RegisterModal';
import RegisterForm from './components/RegisterForm';
import Routing from './components/Routing';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <MisionYVision/>
    <RegisterForm/>
    <RegisterModal/>
    </div>
  );
}

export default App;
