

function Cart(props){

    function cleanListFunction(){
        document.querySelector(".cartList").innerHTML="";
        document.getElementById("cartPaymentValue").innerHTML="00,00";

        setTimeout(()=>{
            props.toggleCart("hide");
        }, 200);
    }

    return(
        <section className="cart">
            <button onClick={() => {props.toggleCart("hide")}} id="closeCart" className="closeBtn">&times;</button>
            <h3>Carrinho <i className="bi bi-cart-fill"></i></h3>
            <button onClick={cleanListFunction} className="actionBtn cleanListBtn">Limpar</button>


            <ul className="cartList">            
                
            </ul>


            <div className="cartPaymentDiv d-flex flex-row justify-content-evenly w-100 p-4">
                <p className="mb-0 text-center fw-bold">Total <br></br> R$<span id="cartPaymentValue">00.00</span></p>
                <button id="buyBtnCart" className="actionBtn">Comprar</button>
            </div>


        </section>
    )
}

export default Cart;