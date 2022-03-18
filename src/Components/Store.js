import Nav from './Nav';
import HeroSection from './HeroSection';
import FirstSection from './FirstSection';
import ConsolesSection from './ConsolesSection';
import DiscountSection from './DiscountSection';
import Footer from './Footer';

function Store(props){
    return(
        <div className="store">
            <div className="alert fw-bold">
                <p className="m-0 d-inline mx-1">Item adicionado ao carrinho</p>  
                <i className="bi bi-cart-fill"></i>
                <i className="bi bi-check-circle-fill"></i>
            </div>

            <Nav/>
            <HeroSection updateDetailsPage={props.updateDetailsPage}/>
            <FirstSection/>
            <ConsolesSection/>
            <DiscountSection/>
            <Footer/>

        </div>
    )
}

export default Store;