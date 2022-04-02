import { useDispatch } from 'react-redux';
import { updateDetails } from '../actions/productsInfoAction'

function ConsolesSection(props){

    const dispatch = useDispatch();

    return(
        <section className="section consolesSection">
            <h3 className="sectionTitle">Consoles e acessórios</h3>

            <div className="consolesContainerGrid">

                {/* PS5 */}
                <div className="card">

                    <span></span>
                    <div className="consoleContent">
                        

                        <h1 className="itemTitle">Playstation 5</h1>
                        <h5 className="price">R$4,699,99</h5>

                        <button onClick={() => dispatch(updateDetails("ps5"))} className="btn actionButton">Comprar!</button>

                        <button onClick={() => {props.itemAddedToCart("ps5")}} className="btn actionButton">Adicionar ao carrinho
                        <i className="bi bi-cart-fill"></i>
                        </button>
                    </div>

                </div>

                {/* DUALSENSE */}
                <div className="card"> 

                    <div className="consoleContent">
                        <h1 className="itemTitle">Dualsense</h1>
                        <p className="price">R$429,90</p>

                        <button onClick={() => dispatch(updateDetails("dualsense"))} className="btn actionButton">Comprar!</button>

                        <button onClick={() => {props.itemAddedToCart("dualsense")}} className="btn actionButton">Adicionar ao carrinho
                        <i className="bi bi-cart-fill"></i>
                        </button>
                    </div>

                </div>


                {/* PS4 PRO */}
                <div className="card"> 

                    <div className="consoleContent">
                        <h1 className="itemTitle">Playstation 4 Pro</h1>
                        <p className="price">R$4,189,90</p>

                        <button onClick={() => dispatch(updateDetails("ps4pro"))} className="btn actionButton">Comprar!</button>

                        <button onClick={() => {props.itemAddedToCart("ps4pro")}} className="btn actionButton">Adicionar ao carrinho
                        <i className="bi bi-cart-fill"></i>
                        </button>
                    </div>
                    
                </div>


                {/* XBOX SERIES X */}
                <div className="card"> 

                    <div className="consoleContent">
                        <h1 className="itemTitle">Xbox series X</h1>
                        <p className="price">R$4,499,99</p>

                        <button onClick={() => dispatch(updateDetails("seriesx"))} className="btn actionButton">Comprar!</button>

                        <button onClick={() => {props.itemAddedToCart("seriesx")}} className="btn actionButton">Adicionar ao carrinho
                        <i className="bi bi-cart-fill"></i>
                        </button>
                    </div>
                    
                </div>


                {/* HEADSET */}
                <div className="card"> 

                    <div className="consoleContent">
                        <h1 className="itemTitle">Playstation Headset</h1>
                        <p className="price">R$149,90</p>

                        <button onClick={() => dispatch(updateDetails("headset"))} className="btn actionButton">Comprar!</button>

                        <button onClick={() => {props.itemAddedToCart("headset")}} className="btn actionButton">Adicionar ao carrinho
                        <i className="bi bi-cart-fill"></i>
                        </button>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default ConsolesSection