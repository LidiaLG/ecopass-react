import './App.css';
import Footer from './components/Footer';
import MisionVision from './components/MisionVision';
// import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Login></Login> */}
      <MisionVision></MisionVision>
      <Footer></Footer>
    </>
  );
}

export default App;
