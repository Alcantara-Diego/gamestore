

export default  function detailsReducer (state = [], action) {
    
    switch (action.type) {
        case "UPDATE_DETAILS":
            const game = action.payload;

            console.log("reducer acionado")
            window.location.hash="/detalhes"

            setTimeout(() => {


                let name = document.getElementById("productName");
                let price = document.getElementById("productPrice");
                let platform = document.getElementById("productPlatform");
                let developer = document.getElementById("productDeveloper");
                let tags = document.getElementById("productTags");
                let image = document.getElementById("productImageId");

                name.innerHTML = game.name;
                price.innerHTML = game.price;
                platform.innerHTML= game.platform;
                developer.innerHTML=game.developer;
                tags.innerHTML=game.tags;
                image.style.backgroundImage = `url(${game.img})`;


            }, 1000);




            return action.payload;

        default:
            return state;
    }
}