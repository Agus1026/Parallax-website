const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

document.addEventListener("scroll", () => {
    let value = window.scrollY;

    two.style.right = -value * 0.8 + "px";
    three.style.bottom = -value * 0.4 + "px";
    four.style.bottom = value * 0.6 + "px";
})