import Nav from './Nav';
import Cart from './Cart';
import HeroSection from './HeroSection';
import FirstSection from './FirstSection';
import ConsolesSection from './ConsolesSection';
import DiscountSection from './DiscountSection';
import Footer from './Footer';

function Store(props){

    function toggleCart(){
        document.querySelector(".cart").classList.toggle("showCart");

        // In smaller devices, close the hamburguer option while showing the cart
        document.querySelector(".contentSecondColumn").classList.add("hideNavOptions");
    }

    return(
        <div className="store">
            <div className="alert fw-bold">
                <p className="m-0 d-inline mx-1">Item adicionado ao carrinho</p>  
                <i className="bi bi-cart-fill"></i>
                <i className="bi bi-check-circle-fill"></i>
            </div>

            <Cart toggleCart={toggleCart}/>
            <Nav toggleCart={toggleCart}/>
            <HeroSection updateDetailsPage={props.updateDetailsPage}/>
            <FirstSection toggleCart={toggleCart}/>
            <ConsolesSection toggleCart={toggleCart}/>
            <DiscountSection/>
            <Footer/>

        </div>
    )
}

export default Store;