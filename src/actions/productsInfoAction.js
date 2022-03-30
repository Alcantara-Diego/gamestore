import library from "../Components/productsInfo";

export function updateDetails(code){
    let gameInfo;

    library.map(gameObject => {
        console.log(gameObject.code)
        if(gameObject.code === code) {
            gameInfo = gameObject;            
        }
    })

    return { type: "UPDATE_DETAILS", payload: gameInfo }
}

export function addToCart(code){

    let gameInfo;

    library.map(gameObject => {
        console.log(gameObject.code)
        if(gameObject.code === code) {
            gameInfo = gameObject;            
        }
    })

    return { type: "ADD_TO_CART", payload: gameInfo }
}