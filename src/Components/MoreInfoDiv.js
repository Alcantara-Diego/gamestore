import SuggestionSection from "./SuggestionSection";

function MoreInfoDiv(){
    return(
        <div className="moreInfoContainer">
            <div className="moreInfoContent position-relative">
                <h3 className="moreInfoDivTitle mb-0">Mais detalhes!</h3>
                <hr className=" mt-1 mb-4"></hr>

                <a id='closeDetails' href='/gamestore'>&times;</a>


                <section className="contentFirstSection itemDetailsDiv position-relative d-flex w-100">

                    <div className="ProductImage">
                        
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

                        <div className='PriceDiv'>
                            <p className="oldPrice">R$250.00</p>
                            <h3 className="Price">R$120,00</h3>
                        </div>

                        <div className="mt-2">Here comes a description of the game Here comes a description of the game Here comes a description of the game Here comes a description of the game Here comes a description of the game Here comes a description of the game Here comes a description of the game Here comes a description of the gameHere comes a description of the game</div>

                        <ul className="p-0 mt-3">
                            <li><strong>Plataforma</strong> PS4</li>
                            <li><strong>Desenvolvedora</strong> Insomniac</li>
                            <li><strong>Exclusivos / Super-Heróis / Mundo aberto / luta</strong></li>
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