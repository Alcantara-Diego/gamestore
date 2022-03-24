function Cart(props){

    return(
        <section className="cart">
            <button onClick={props.toggleCart} id="closeCart" className="closeBtn">&times;</button>
            <h3>Carrinho</h3>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>


            <div className="cartPaymentDiv d-flex flex-row justify-content-evenly w-100 p-4">
                <p className="mb-0 text-center fw-bold">Total <br></br> R$00,00</p>
                <button id="buyBtnCart">Comprar</button>
            </div>


        </section>
    )
}

export default Cart;