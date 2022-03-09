import spidermanGame from '../assets/gamesImages/spidermanGame.jpg';

function MoreInfoDiv(){
    return(
        <div className="moreInfoContainer">
            <div className="moreInfoContent">
                <h3 className="moreInfoDivTitle mb-0">Mais detalhes!</h3>
                <hr className=" mt-1 mb-4"></hr>
                <section className="contentFirstSection d-flex w-100">
                    <div className="ProductImage">
                        
                    </div>

                    <div className="productMainDetails">
                        <div className='deliveredByText mb-0'>Vendido e entrege por <strong>FlameStore🔥</strong><div className='mb-0'>|Em Estoque!</div>
                        </div>


                        <h1 id='productName' className='mb-0'>Nome do jogo</h1>
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


                    </div>
                </section>
            </div>
        </div>
    )
}

export default MoreInfoDiv;