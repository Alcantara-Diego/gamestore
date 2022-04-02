export function scrollAnimation(elementClassName){

    let div = document.querySelector(`.${elementClassName}`);
    let scrollNumber = div.getBoundingClientRect().top + window.scrollY;
    
    return {type: "AUTO_SCROLL", payload: scrollNumber}
}