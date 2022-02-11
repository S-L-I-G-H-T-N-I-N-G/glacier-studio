var menuNutton = document.getElementById("top-bar--menu")
function onClickMenuNutton() {
    var style = menuNutton.style
    style.transition = "top 1s"
    if (style.top == "4rem") {
        style.top = "calc(4rem - 100vh)"
    } else {
        style.top = "4rem"
    }
}