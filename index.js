const bgImg = document.querySelector("img");

let x = 0;
let y = 0;

document.addEventListener("mousemove", parallax);
function parallax(event) {
    x = (window.innerWidth - event.pageX) / 90;
    y = (window.innerHeight - event.pageY) / 90;

    bgImg.style.transform = `translateX(${x}px) translateY(${y}px) scale(150%)`;
}
