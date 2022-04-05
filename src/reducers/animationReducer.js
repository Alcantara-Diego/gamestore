import { gsap } from 'gsap'

export default function animationReducer(state = 0, action){

    switch (action.type) {
        case "AUTO_SCROLL":
            
            let root = document.querySelector("html,body");
            return root.scrollTop = action.payload;

        case "RUN_LOADING_ANIMATION":

            //Loading screen animation 
            gsap.from(".loadScreen", {duration: 1, delay: action.payload, opacity: 1, display: "flex"}).then(()=>{
                // Remove the loading div from the screen 
                document.querySelector(".loadScreen").style.display="none";
            })

            // Hero section animations
            gsap.from(".navigateBetweenSectionCards", {duration: 1.4, delay: action.payload, opacity: .1, y: "40px"});
            gsap.from(".buyItemHeroSection", {duration: 1.5, delay: action.payload+.5, opacity: 0, y: "80px"});
            return state
    
        default:
            return state;
    }
}