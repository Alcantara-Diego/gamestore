import SuggestionSection from "./SuggestionSection";

function MoreInfoDiv(){

    function goBackHome(){
        window.location.href="";
    }
    return(
        <div className="moreInfoContainer">
            <div className="moreInfoContent position-relative">
                <h3 className="moreInfoDivTitle mb-0">Mais detalhes!</h3>
                <hr className=" mt-1 mb-4"></hr>

                <button onClick={goBackHome} id="closeDetails" className="closeBtn" href='/gamestore'>&times;</button>


                <section className="contentFirstSection itemDetailsDiv position-relative d-flex w-100">

                    <div id="productImageId" className="ProductImage">
                        
                    </div>

                    <div className="productMainDetails">
                        <div className='deliveredByText mb-0'>Vendido e entrege por <strong>FlameStore🔥</strong><div className='mb-0'>|Em Estoque!</div>
                        </div>


                        <h1 id='productName' className='mb-0'>Spider-Man PS4</h1>
                        <div className="itemRate">
                            <i className="bi bi-heart-fill"></i>
                            <i className="bi bi-heart-fill"></i>
                            <i className="bi bi-heart-fill"></i>
                            <i className="bi bi-heart-fill"></i>
                            <i className="bi bi-heart"></i>
                        </div>

                        <div className='PriceDiv mb-3 mt-1'>
                            <h3 id="productPrice" className="Price">R$120,00</h3>
                        </div>

                        <div id="productDescription" className="mt-2">Here comes a description of the game Here comes a description of the game Here comes a description of the game Here comes a description of the game Here comes a description of the game Here comes a description of the game Here comes a description of the game Here comes a description of the gameHere comes a description of the game</div>

                        <ul className="extraInfoList p-0 mt-3">
                            <li>
                                <strong>Plataforma</strong> <p id="productPlatform">PS4</p>
                            </li>
                            <li>
                                <strong>Desenvolvedora</strong> <p id="productDeveloper">Insomniac</p></li>
                            <li>
                                <strong id="productTags">Exclusivos / Super-Heróis / Mundo aberto / luta</strong>
                            </li>
                        </ul>


                        <button className="actionButton btn">Finalizar Compra!</button>
                    </div>
                </section>

                <SuggestionSection/>
            </div>
        </div>
    )
}

export default MoreInfoDiv;