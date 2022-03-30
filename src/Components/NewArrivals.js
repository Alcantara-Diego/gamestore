import batmanGame from '../assets/gamesImages/batmanGame.jpg'
import tlou2Game from '../assets/gamesImages/tlou2Game.png'
import codBo4Game from '../assets/gamesImages/codBo4Game.jpg'
import redDeadGame from '../assets/gamesImages/redDeadGame.jpg'
import mk11Game from '../assets/gamesImages/mk11Game.jpg'

import library from './productsInfo'

import { useDispatch } from 'react-redux';
import { updateDetails, addToCart } from '../actions/productsInfoAction'

function NewArrivals(props){

    const dispatch = useDispatch();

    function updatePaymentValue(code){
        console.log("----------")
        let productPrice;
        
        library.map(obj => {
            if(obj.code === code){
                productPrice = obj.price;
                console.log(productPrice);
            }
        });

        let cartPaymentValueElement = document.getElementById("cartPaymentValue");
        let actualTotalPrice = cartPaymentValueElement.innerHTML;

        let newTotal = translateAndCalcuteValues(actualTotalPrice, productPrice);

        cartPaymentValueElement.innerHTML=newTotal;
    }

    function translateAndCalcuteValues(firstNumber, secondNumber){
        firstNumber = Number(firstNumber.replace(",", ".")).toFixed(2);
        secondNumber = Number(secondNumber.replace(",", ".")).toFixed(2);

        const total = (Number(firstNumber) + Number(secondNumber)).toFixed(2);

        return total;
        
    }

    function detectClickedArea(code){
        // Detect the class of the element that was clicked
        let e = window.event;
        let itemClickedClass = e.target.className;
        console.log(itemClickedClass)

        // If the user clicked in the cart button, the product is added to the cart.
        if(itemClickedClass === "bi bi-cart2" || itemClickedClass === "addToCartMiniBtn"){
            dispatch(addToCart(code));
            // updatePaymentValue(code);
            props.toggleCart();


        } else{  // If the user did not click in the cart button, he is redirected to the product details. 
            dispatch(updateDetails(code));
        }
    }

    return (
        <div className="newArrivals">
            <h3 className="sectionTitle">Recém-chegados</h3>

            <div className="cardsContainer">

                {/* THE LAST OF US 2 */}
                <div onClick={() => detectClickedArea("tlou2")}  className="card simpleCard">
                    <div className="imgContainer">
                        <img src={tlou2Game}  alt="."></img>
                    </div>
                    
                    <div className="simpleCardContent">
                        <div className="simpleCardTopInfo">
                            <h4 className="itemTitleInSimpleCard">The last of us parte 2</h4>

                            <div className="itemRate">
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart"></i>
                            </div>
                    </div>

                        <div className="simpleCardBottomInfo">
                            
                            <p className="price">R$249.90</p>
                            
                            <button className="addToCartMiniBtn">
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>


                {/* RED DEAD REDEMPTION 2 */}
                <div onClick={() => detectClickedArea("rdr2")} className="card simpleCard">
                    <div className="imgContainer">
                        <img src={redDeadGame}  alt="."></img>
                    </div>
                    
                    <div className="simpleCardContent">
                        <div className="simpleCardTopInfo">
                            <h4 className="itemTitleInSimpleCard">Red Dead Redemption 2</h4>

                            <div className="itemRate">
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                            </div>
                    </div>

                        <div className="simpleCardBottomInfo">
                            <p className="price">R$279.99</p>
                            <button className="addToCartMiniBtn">
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>


                {/* BATMAN ARKHAM KNIGHT */}
                <div onClick={() => detectClickedArea("batmanak")} className="card simpleCard">
                    <div className="imgContainer">
                        <img src={batmanGame}  alt="."></img>
                    </div>

                    <div className="simpleCardContent">

                        <div className="simpleCardTopInfo">
                            <h4 className="itemTitleInSimpleCard">Batman Arkham Knight</h4>

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
                                <p className="discount">R$160,00</p>
                                <p className="price">R$109.99</p>
                            </div>
                            <button className="addToCartMiniBtn">
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>

                {/* MK11 */}
                <div onClick={() => detectClickedArea("mk11")} className="card simpleCard">
                    <div className="imgContainer">
                        <img src={mk11Game}  alt="."></img>
                    </div>
                    
                    <div className="simpleCardContent">
                        <div className="simpleCardTopInfo">
                            <h4 className="itemTitleInSimpleCard">Mortal Kombat 11 Premium Edition</h4>

                            <div className="itemRate">
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart"></i>
                            </div>
                    </div>

                        <div className="simpleCardBottomInfo">
                            <p className="price">R$149.99</p>
                            <button className="addToCartMiniBtn">
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>

                {/* COD BO4 */}
                <div onClick={() => detectClickedArea("codbo4")} className="card simpleCard">
                    <div className="imgContainer">
                        <img src={codBo4Game}  alt="."></img>
                    </div>

                    <div className="simpleCardContent">

                        <div className="simpleCardTopInfo">
                            <h4 className="itemTitleInSimpleCard">Call Of Duty Black Ops 4</h4>

                            <div className="itemRate">
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart-fill"></i>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-heart"></i>
                            </div>

                        </div>

                        <div className="simpleCardBottomInfo">
                            <div className="discountContainer">
                                <p className="discount">R$250,00</p>
                                <p className="price">R$129.99</p>
                            </div>
                            <button className="addToCartMiniBtn">
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>
                
                

            </div>
        </div>
    )
}

export default NewArrivals;