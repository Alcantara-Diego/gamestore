import minecraftGame from '../assets/gamesImages/minecraftGame.jpg';
import revillageGame from '../assets/gamesImages/REVillageGame.jpg';
import spidermanGame from '../assets/gamesImages/spidermanGame.jpg';
import gtaGame from '../assets/gamesImages/gtaGame.jpeg';
import cyberpunkGame from '../assets/gamesImages/cyberpunkGame.jpg';

import { useDispatch } from 'react-redux';
import { updateDetails, addToCart } from '../actions/productsInfoAction'


function DiscountSection(props){

    const dispatch = useDispatch();

    function detectClickedArea(code){
        // Detect the class of the element that was clicked
        let e = window.event;
        let itemClickedClass = e.target.className;
        console.log(itemClickedClass)

        // If the user clicked in the cart button, the product is added to the cart.
        if(itemClickedClass === "bi bi-cart2" || itemClickedClass === "addToCartMiniBtn"){
            dispatch(addToCart(code));
            props.toggleCart();


        } else{  // If the user did not click in the cart button, he is redirected to the product details. 
            dispatch(updateDetails(code));
        }
    }

    return(
        <section className="section discountSection">
            <h3 className="sectionTitle">Ofertas por tempo limitado!</h3>

            <div className="discountWarning">🔥Até a próxima sexta-feira🔥</div>
            <div className="cardsContainer">

                {/* SPIDERMAN */}
                <div onClick={() => detectClickedArea("spiderman")} className="card simpleCard">
                    <div className="imgContainer">
                        <img src={spidermanGame}  alt="."></img>
                    </div>
                    
                    <div className="simpleCardContent">
                        <div className="simpleCardTopInfo">
                            <h4 className="itemTitleInSimpleCard">Spider-Man PS4</h4>

                            <div className="itemRate">
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart"></i>
                            </div>
                    </div>

                        <div className="simpleCardBottomInfo">
                            
                            <div className="discountContainer">
                                <p className="discount">R$230,00</p>
                                <p className="price">R$161.00</p>
                            </div>
                            
                            <button className="addToCartMiniBtn">
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>

                {/* RESIDENT EVIL VILLAGE */}
                <div onClick={() => detectClickedArea("revillage")} className="card simpleCard">
                    <div className="imgContainer">
                        <img src={revillageGame}  alt="."></img>
                    </div>
                    
                    <div className="simpleCardContent">
                        <div className="simpleCardTopInfo">
                            <h4 className="itemTitleInSimpleCard">Resident Evil Village</h4>

                            <div className="itemRate">
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart"></i>
                            </div>
                    </div>

                        <div className="simpleCardBottomInfo">
                            
                            <div className="discountContainer">
                                <p className="discount">R$280,00</p>
                                <p className="price">R$209.90</p>
                            </div>
                            
                            <button className="addToCartMiniBtn">
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>


                {/* MINECRAFT */}
                <div onClick={() => detectClickedArea("mine")} className="card simpleCard">
                    <div className="imgContainer">
                        <img src={minecraftGame}  alt="."></img>
                    </div>
                    
                    <div className="simpleCardContent">
                        <div className="simpleCardTopInfo">
                            <h4 className="itemTitleInSimpleCard">Minecraft</h4>

                            <div className="itemRate">
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart"></i>
                            </div>
                    </div>

                        <div className="simpleCardBottomInfo">
                            <div className="discountContainer">
                                <p className="discount">R$110,00</p>
                                <p className="price">R$99.00</p>
                            </div>
                            <button className="addToCartMiniBtn">
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>

                {/* GTA V */}
                <div onClick={() => detectClickedArea("gtav")} className="card simpleCard">
                    <div className="imgContainer">
                        <img src={gtaGame}  alt="."></img>
                    </div>

                    <div className="simpleCardContent">

                        <div className="simpleCardTopInfo">
                            <h4 className="itemTitleInSimpleCard">Grand Theft Auto V</h4>

                            <div className="itemRate">
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                            </div>

                        </div>

                        <div className="simpleCardBottomInfo">
                            <div className="discountContainer">
                                <p className="discount">R$196,00</p>
                                <p className="price">R$117.50</p>
                            </div>
                            <button className="addToCartMiniBtn">
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>


                {/* CYBERPUNK 2077 */}
                <div onClick={() => detectClickedArea("2077")} className="card simpleCard">
                    <div className="imgContainer">
                        <img src={cyberpunkGame}  alt="."></img>
                    </div>

                    <div className="simpleCardContent">

                        <div className="simpleCardTopInfo">
                            <h4 className="itemTitleInSimpleCard">CyberPunk 2077</h4>

                            <div className="itemRate">
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-heart"></i>
                            </div>

                        </div>

                        <div className="simpleCardBottomInfo">
                            <div className="discountContainer">
                                <p className="discount">R$280,00</p>
                                <p className="price">R$69.90</p>
                            </div>
                            <button className="addToCartMiniBtn">
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>
                

            </div>

        </section>
    )
}

export default DiscountSection;