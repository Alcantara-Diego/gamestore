import { useDispatch } from "react-redux"
import { scrollAnimation } from "../actions/animationAction"

function Nav(props){
    const dispatch = useDispatch();

    function toggleNavInMobile(){
        document.querySelector(".contentSecondColumn").classList.toggle("hideNavOptions");
    }

    return(
        <nav className="w-100 p-0 d-flex flex-row align-items-end">
            <div className="logo h-100 px-5 py-3 fw-bold">FlameStore🔥</div>

            {/* Hamburguer on mobile screens */}
            <button className="mobileHamburguer" onClick={toggleNavInMobile}><i className="bi bi-list"></i></button>

            {/* Nav options */}
            <div className="navContent w-100 px-3 d-flex flex-column">

                {/* Options os first line */}
                <div className="contentFirstColumn pb-2 d-flex flex-row justify-content-between">
                    <div className="socialMediaIcons">
                        Nos siga em: 
                        <button><i className="bi bi-facebook"></i></button>
                        <button><i className="bi bi-youtube"></i></button>
                        <button><i className="bi bi-twitter"></i></button>
                    </div>

                    <div className="aditionalInfo"><p className="idioma mb-0">Idioma: <strong>BR<i className="mx-1 bi bi-caret-down-fill"></i></strong></p></div>
                </div>

                {/* Options on second line */}
                <div className="contentSecondColumn hideNavOptions justify-content-between">
                    <ul className="navOptions d-flex mb-0">
                        <button className="closeBtn" onClick={toggleNavInMobile}>&times;</button>
                        <li onClick={() => dispatch(scrollAnimation("heroSection"))} className="navOption">Home</li>
                    
                        <li onClick={() => dispatch(scrollAnimation("newArrivals"))} className="navOption">Novidades</li>
                    
                        <li onClick={() => dispatch(scrollAnimation("consolesSection"))} className="navOption">Consoles</li>
                    </ul>

                    <ul className="d-flex mb-0">
                        <li onClick={props.toggleCart}>Carrinho<i className="bi bi-cart2"></i></li>

                        <li>Conta<i className="bi bi-person"></i></li>
                    </ul>
                </div>

                
            </div>

            
        </nav>
    )
}

export default Nav;