import './style/style.css';
import Nav from './Components/Nav'
import HeroSection from './Components/HeroSection';
import Highlights from './Components/Highlights';

function App() {
  return (
    <div className="App">
      <Nav/>
      <HeroSection/>
      <Highlights/>
    </div>
  );
}

export default App;
