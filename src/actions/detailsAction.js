import library from "../Components/gamesInfo";

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