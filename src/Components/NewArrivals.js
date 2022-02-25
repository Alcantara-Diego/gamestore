import batmanGame from '../assets/gamesImages/batmanGame.jpg'
import tlowGame from '../assets/gamesImages/tlowGame.jpg'
import codBo4Game from '../assets/gamesImages/codBo4Game.jpg'
import redDeadGame from '../assets/gamesImages/redDeadGame.jpg'
import mk12Game from '../assets/gamesImages/mk12Game.jpg'

function NewArrivals(){
    return (
        <div className="newArrivals">
            <h3 className="sectionTitle">Recém-chegados</h3>

            <div className="cardsContainer">

                {/* THE LAST OF US 2 */}
                <div className="card">
                    <div className="imgContainer">
                        <img src={tlowGame}  alt="."></img>
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
                            <p className="price">R$129.99</p>
                            <button>
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>


                {/* RED DEAD REDEMPTION 2 */}
                <div className="card">
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
                            <p className="price">R$299.99</p>
                            <button>
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>


                {/* BATMAN ARKHAM KNIGHT */}
                <div className="card">
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
                            <p className="price">R$149.99</p>
                            <button>
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>

                {/* MK12 */}
                <div className="card">
                    <div className="imgContainer">
                        <img src={mk12Game}  alt="."></img>
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
                            <p className="price">R$129.99</p>
                            <button>
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>

                {/* COD BO4 */}
                <div className="card">
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
                            <p className="price">R$199.99</p>
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