export function scrollAnimation(elementClassName){

    let div = document.querySelector(`.${elementClassName}`);
    let scrollNumber = div.getBoundingClientRect().top + window.scrollY;

    // A number to compensate the navbar height when auto scroll
    let navbarCompensation = 80

    scrollNumber -= navbarCompensation;
    
    return {type: "AUTO_SCROLL", payload: scrollNumber}
}

export function loadingAnimation(){
    const loadScreenDelay = 1.3;

    return { type: "RUN_LOADING_ANIMATION", payload: loadScreenDelay }
}