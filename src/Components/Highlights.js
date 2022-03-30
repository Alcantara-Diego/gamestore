import { useDispatch } from 'react-redux';
import { updateDetails } from '../actions/productsInfoAction'

function Highlights(props){

    const dispatch = useDispatch();
    
    return(
        <section className="highlightsSection w-100">

            {/* HORIZON FORBIDDEN WEST */}
            <div id="hilight1" className="highlight">

                <div className="highlightActionButtons">
                    <h1 className="itemTitle">Horizon Forbidden West</h1>
                    <button onClick={() => dispatch(updateDetails("horizonfw"))} className="btn actionButton">Comprar!</button>
                    <button className="btn actionButton" onClick={() => {props.itemAddedToCart("horizonfw")}}>Adicionar ao carrinho
                    <i className="bi bi-cart-fill"></i>
                    </button>
                </div>

                <div className="highlightBottomInfo">
                    <div className="highlightName">Destaque</div>
                    <div className="price">R$249,99</div>
                </div>

            </div>

            {/* GTA V */}
            <div id="hilight2" className="highlight">


                <div className="highlightActionButtons">
                <h1 className="itemTitle">Grand Theft Auto V</h1>
                    <button onClick={() => dispatch(updateDetails("gtav"))}  className="btn actionButton">Comprar!</button>
                    <button className="btn actionButton" onClick={() => {props.itemAddedToCart("gtav")}}>Adicionar ao carrinho
                    <i className="bi bi-cart-fill"></i>
                    </button>
                </div>

                <div className="highlightBottomInfo">
                    <div className="highlightName">Destaque</div>
                    <div className="price">R$117,50</div>
                </div>

            </div>

            {/* RESIDENT EVILL VILLAGE */}
            <div id="hilight3" className="highlight">

                <div className="highlightActionButtons">
                <h1 className="itemTitle">Resident Evil Village</h1>
                    <button onClick={() => dispatch(updateDetails("revillage"))}  className="btn actionButton">Comprar!</button>
                    <button className="btn actionButton" onClick={() => {props.itemAddedToCart("revillage")}}>Adicionar ao carrinho
                    <i className="bi bi-cart-fill"></i>
                    </button>
                </div>

                <div className="highlightBottomInfo">
                    <div className="highlightName">Oferta</div>
                    <div className="price">R$209,90</div>
                </div>

            </div>

            {/* GOD OF WAR */}
            <div id="hilight4" className="highlight">

                <div className="highlightActionButtons">
                <h1 className="itemTitle">God of war</h1>
                    <button onClick={() => dispatch(updateDetails("gow"))} className="btn actionButton">Comprar!</button>
                    <button className="btn actionButton" onClick={() => {props.itemAddedToCart("gow")}}>Adicionar ao carrinho
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