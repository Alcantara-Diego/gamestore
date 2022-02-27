import minecraftGame from '../assets/gamesImages/minecraftGame.jpg';
import revillageGame from '../assets/gamesImages/REVillageGame.jpg';
import spidermanGame from '../assets/gamesImages/spidermanGame.jpg';
import gtaGame from '../assets/gamesImages/gtaGame.jpeg';
import cyberpunkGame from '../assets/gamesImages/cyberpunkGame.jpg';

function DiscountSection(){
    return(
        <section className="section discountSection">
            <h3 className="sectionTitle">Ofertas por tempo limitado!</h3>

            <div className="cardsContainer">

                {/* SPIDERMAN */}
                <div className="card simpleCard">
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
                                <p className="discount">R$160,00</p>
                                <p className="price">R$109.99</p>
                            </div>
                            
                            <button>
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>

                {/* RESIDENT EVIL VILLAGE */}
                <div className="card simpleCard">
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
                                <p className="discount">R$160,00</p>
                                <p className="price">R$109.99</p>
                            </div>
                            
                            <button>
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>


                {/* MINECRAFT */}
                <div className="card simpleCard">
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
                                <i className="bi bi-heart-fill"></i>
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

                {/* GTA */}
                <div className="card simpleCard">
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
                                <p className="discount">R$160,00</p>
                                <p className="price">R$109.99</p>
                            </div>
                            <button>
                                <i className="bi bi-cart2"></i>
                            </button>
                        </div>

                    </div>
                </div>


                {/* CYBERPUNK 2077 */}
                <div className="card simpleCard">
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
                                <p className="discount">R$160,00</p>
                                <p className="price">R$109.99</p>
                            </div>
                            <button>
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