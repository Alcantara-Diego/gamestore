import library from "../Components/productsInfo";

// Return a product information as an object based on its unique code
function getLibraryInfo(code){
    let selectedProduct;

    library.map(product => {
        if(product.code === code) {
            selectedProduct = product;            
        }
    })

    return selectedProduct;

}

// Redirect the user to the details of the product that was clicked in 
export function updateDetails(code){

    let productInfo = getLibraryInfo(code);

    return { type: "UPDATE_DETAILS", payload: productInfo }
}

// Add the game to the cart in the "productsInfoReducer", and update the payment price in the "cartReducer"
export function addToCart(code){

    let productInfo = getLibraryInfo(code);
    return { type: "ADD_TO_CART", payload: productInfo }
}
