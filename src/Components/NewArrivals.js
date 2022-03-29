import batmanGame from '../assets/gamesImages/batmanGame.jpg'
import tlou2Game from '../assets/gamesImages/tlou2Game.png'
import codBo4Game from '../assets/gamesImages/codBo4Game.jpg'
import redDeadGame from '../assets/gamesImages/redDeadGame.jpg'
import mk11Game from '../assets/gamesImages/mk11Game.jpg'

import { useDispatch } from 'react-redux';
import { updateDetails } from '../actions/detailsAction'

function NewArrivals(){
    
    const dispatch = useDispatch();

    return (
        <div className="newArrivals">
            <h3 className="sectionTitle">Recém-chegados</h3>

            <div className="cardsContainer">

                {/* THE LAST OF US 2 */}
                <div onClick={() => dispatch(updateDetails("tlou2"))}  className="card simpleCard">
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
                            
                            <button>
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>


                {/* RED DEAD REDEMPTION 2 */}
                <div onClick={() => dispatch(updateDetails("rdr2"))} className="card simpleCard">
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
                            <button>
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>


                {/* BATMAN ARKHAM KNIGHT */}
                <div onClick={() => dispatch(updateDetails("batmanak"))} className="card simpleCard">
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
                            <button>
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>

                {/* MK11 */}
                <div onClick={() => dispatch(updateDetails("mk11"))} className="card simpleCard">
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
                            <button>
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>

                {/* COD BO4 */}
                <div onClick={() => dispatch(updateDetails("codbo4"))} className="card simpleCard">
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
                            <button>
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