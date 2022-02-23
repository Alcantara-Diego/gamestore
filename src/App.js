import './style/style.css';
import Nav from './Components/Nav'
import HeroSection from './Components/HeroSection';
import FirstSection from './Components/FirstSection';

function App() {
  return (
    <div className="App">

      <div className="alert fw-bold">
        <p className="m-0 d-inline mx-1">Item adicionado ao carrinho</p>  
        <i className="bi bi-cart-fill"></i>
        <i className="bi bi-check-circle-fill"></i>
      </div>
      <Nav/>
      <HeroSection/>
      <FirstSection/>
    </div>
  );
}

export default App;
