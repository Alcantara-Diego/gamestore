import Nav from './Nav';
import Cart from './Cart';
import HeroSection from './HeroSection';
import FirstSection from './FirstSection';
import ConsolesSection from './ConsolesSection';
import DiscountSection from './DiscountSection';
import LoadScreen from './LoadScreen';
import Footer from './Footer';

import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/productsInfoAction'
import { loadingAnimation } from '../actions/animationAction'
import { useEffect } from 'react';

function Store(props){

    const dispatch = useDispatch();

    useEffect(()=>{
        // Loading animation when render the component
        dispatch(loadingAnimation());
    });


    function itemAddedToCart(code){

        dispatch(addToCart(code));
        let cartAlert = document.getElementsByClassName("alert")[0]
        
        cartAlert.style.animation="showAlert 4s";
        toggleCart();

        setTimeout( ()=>{
            cartAlert.style.animation="none";
        }, 4000);
    }



    function toggleCart(state){
        if(state === "hide") document.querySelector(".cart").classList.remove("showCart");
        else document.querySelector(".cart").classList.add("showCart");

        // In smaller devices, close the hamburguer option while showing the cart
        document.querySelector(".contentSecondColumn").classList.add("hideNavOptions");
    }

    return(
        <div className="store">
            <LoadScreen/>
            <div className="alert fw-bold">
                <p className="m-0 d-inline mx-1">Item adicionado ao carrinho</p>  
                <i className="bi bi-cart-fill"></i>
                <i className="bi bi-check-circle-fill"></i>
            </div>

            <Cart toggleCart={toggleCart}/>
            <Nav toggleCart={toggleCart}/>
            <HeroSection updateDetailsPage={props.updateDetailsPage}/>
            <FirstSection itemAddedToCart={itemAddedToCart} toggleCart={toggleCart}/>
            <ConsolesSection itemAddedToCart={itemAddedToCart} toggleCart={toggleCart}/>
            <DiscountSection toggleCart={toggleCart}/>
            <Footer/>

        </div>
    )
}

export default Store;