const bgImg = document.querySelector("img");

let x = 0;
let y = 0;

document.addEventListener("mousemove", parallax);
function parallax(event) {
    x = (window.innerWidth - event.pageX) / 70;
    y = (window.innerHeight - event.pageY) / 70;

    bgImg.style.transform = `translateX(${x}px) translateY(${y}px) scale(125%)`;
}
