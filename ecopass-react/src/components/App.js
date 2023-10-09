
import Streamer from './main/Streamer';
import CurrentEvent from './main/CurrentEvent';
import NextEvent from './main/NextEvent';
import Carousel from './main/Carousel'
import Sponsor from './main/Sponsor';
import './main/main.css';

function App() {

  return (
    <div className="App">

      <CurrentEvent/>
      <Streamer/>
      <NextEvent/>
      <Carousel/>
      <Sponsor/>
      
      
      
    </div>
  );
}

export default App;
