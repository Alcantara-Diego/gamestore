

export default  function cartReducer (state = "00.00", action){

    switch (action.type) {
        case "ADD_TO_CART":

            // Price of the product that will be added in the total
            let productPrice = action.payload.price;

            // Get the actual price in the cart
            let cartPaymentValueElement = document.getElementById("cartPaymentValue");
            let actualTotalPrice = cartPaymentValueElement.innerHTML;

            // Combine the values
            let newTotal = translateAndCalcuteValues(actualTotalPrice, productPrice);

            // show the total in the cart
            return cartPaymentValueElement.innerHTML=newTotal;




            function translateAndCalcuteValues(firstNumber, secondNumber){
                firstNumber = Number(firstNumber.replaceAll(",", ".")).toFixed(2);
                secondNumber = Number(secondNumber.replaceAll(",", ".")).toFixed(2);
                        
                const total = (Number(firstNumber) + Number(secondNumber));
                return total.toFixed(2);
            }

        default:
            return state
    }
}