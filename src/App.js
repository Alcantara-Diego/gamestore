import './style/style.css';
import Nav from './Components/Nav'
import HeroSection from './Components/HeroSection';
import FirstSection from './Components/FirstSection';
import ConsolesSection from './Components/ConsolesSection';
import DiscountSection from './Components/DiscountSection';
import Footer from './Components/Footer';

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
      <ConsolesSection/>
      <DiscountSection/>
      <Footer/>
    </div>
  );
}

export default App;
