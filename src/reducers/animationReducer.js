export default function animationReducer(state = 0, action){

    switch (action.type) {
        case "AUTO_SCROLL":
            
            let root = document.querySelector("html,body");
            return root.scrollTop = action.payload
    
        default:
            return state;
    }
}