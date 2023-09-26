import './App.css';
import Footer from './components/Footer';
// import MisionVision from './layouts/MisionVision';
// import Login from './layouts/Login';
import Navbar from './components/Navbar';
import Recompensa from './layouts/Recompensa';
// import TerminosYCondiciones from './layouts/TerminosYCondiciones';
// import Faq from './layouts/Faq';

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Login></Login> */}
      {/* <MisionVision></MisionVision> */}
      {/* <Faq></Faq> */}
      {/* <TerminosYCondiciones></TerminosYCondiciones> */}
      <Recompensa></Recompensa>
      <Footer></Footer>
    </>
  );
}

export default App;
