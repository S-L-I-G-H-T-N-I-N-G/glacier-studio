function onBigScreen() {
    var title = document.getElementById("glacier-center-right-title");
    title.style.fontSize = width * 8 / 100 + "px";
}
function onSmallScreen() {
    var title = document.getElementById("glacier-center-right-title");
    title.style.fontSize = "10vw";
}
big.push(function () {
    onBigScreen();
    window.addEventListener("resize",onBigScreen);
})
small.push(function () {
    onSmallScreen();
    window.removeEventListener("resize",onBigScreen);
})