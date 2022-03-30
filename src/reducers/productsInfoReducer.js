

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
                price.innerHTML = `R$${game.price}`;
                platform.innerHTML= game.platform;
                developer.innerHTML=game.developer;
                tags.innerHTML=game.tags;
                image.style.backgroundImage = `url(${game.img})`;


            }, 1000);




            return action.payload;


        case "ADD_TO_CART":
            const gameObj = action.payload;

            let li = `<li class="cartItem d-flex justify-content-left">
        <div class="cartItemImgContainer">
            <img src=${gameObj.img}></img>
        </div>
        <div class="cartItemContent d-flex flex-column justify-content-between">
            <div class="mainContent">
                <h4 class="cartItemTitle">${gameObj.name}</h4>
                <p class="cartItemPrice">R$${gameObj.price}</p>
            </div>

            <div class="aditionalContent d-flex flex-row justify-content-between align-items-end w-100">
                <p class="cartItemPlatform"><strong>Plataforma:</strong> ${gameObj.platform}</p>

                <p class="cartItemSavedBadge"><i class="bi bi-bookmark-check-fill"></i></p>
            </div>
        </div>
    </li>`
            let cartList = document.querySelector(".cartList");
            let cartListElements = cartList.innerHTML
            return document.querySelector(".cartList").innerHTML = li + cartListElements;
            
        default:
            return state;
    }
}