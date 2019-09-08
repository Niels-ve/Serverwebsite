addEventListener("load ", init, false);
let span;
let on;
let slider;

function init() {
    slider = document.getElementById("slider");
    span = document.getElementsByTagName("span")[0];
    on = false;
    slider.addEventListener("click", changeText, false);

}

function changeText() {
    if (!on) {
        span.style.color = "green";
        span.innerHTML = "ON";
        on = true;
    } else {
        span.style.color = "red";
        span.innerHTML = "OFF";
        on = false;
    }
}
