function Highlights(){

    function itemAddedToCart(){
        let cartAlert = document.getElementsByClassName("alert")[0]
        
        cartAlert.style.animation="showAlert 4s";

        setTimeout( ()=>{
            cartAlert.style.animation="none";
        }, 4000);
    }
    return(
        <section className="highlightsSection w-100">

            <div id="hilight1" className="highlight">

                <div className="highlightActionButtons">
                    <h1 className="itemTitle">Horizon Forbidden West</h1>
                    <button className="btn actionButton">Comprar!</button>
                    <button className="btn actionButton" onClick={itemAddedToCart}>Adicionar ao carrinho
                    <i className="bi bi-cart-fill"></i>
                    </button>
                </div>

                <div className="highlightBottomInfo">
                    <div className="highlightName">Destaque</div>
                    <div className="price">R$249,99</div>
                </div>

            </div>
            <div id="hilight2" className="highlight">


                <div className="highlightActionButtons">
                <h1 className="itemTitle">God of War</h1>
                    <button className="btn actionButton">Comprar!</button>
                    <button className="btn actionButton" onClick={itemAddedToCart}>Adicionar ao carrinho
                    <i className="bi bi-cart-fill"></i>
                    </button>
                </div>

                <div className="highlightBottomInfo">
                    <div className="highlightName">Novo</div>
                    <div className="price">R$299,99</div>
                </div>

            </div>
            <div id="hilight3" className="highlight">

                <div className="highlightActionButtons">
                <h1 className="itemTitle">Resident Evil Village</h1>
                    <button className="btn actionButton">Comprar!</button>
                    <button className="btn actionButton" onClick={itemAddedToCart}>Adicionar ao carrinho
                    <i className="bi bi-cart-fill"></i>
                    </button>
                </div>

                <div className="highlightBottomInfo">
                    <div className="highlightName">Oferta</div>
                    <div className="price">R$99,99</div>
                </div>

            </div>
            <div id="hilight4" className="highlight">

                <div className="highlightActionButtons">
                <h1 className="itemTitle">Rainbow Six Siege</h1>
                    <button className="btn actionButton">Comprar!</button>
                    <button className="btn actionButton" onClick={itemAddedToCart}>Adicionar ao carrinho
                    <i className="bi bi-cart-fill"></i>
                    </button>
                </div>

                <div className="highlightBottomInfo">
                    <div className="highlightName">Oferta</div>
                    <div className="price">R$99,99</div>
                </div>

            </div>

        </section>
    )
}

export default Highlights;