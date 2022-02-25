var menu = document.getElementById("top-bar--menu")
var navigationBar = document.getElementById("top-bar--navigation-bar")

function onClickTopBarMenuButton() {
    if (topBarMenuIsOpen()) {
        closeTopBarMenu()
    } else {
        openTopBarMenu()
    }
}
function topBarMenuIsOpen() {
    return navigationBar.style.top == "4rem"
}
function openTopBarMenu() {
    menu.style.pointerEvents = "auto"
    menu.style.background = "#00000088"
    navigationBar.style.top = "4rem"
}
function closeTopBarMenu() {
    menu.style.pointerEvents = "none"
    menu.style.background = "#00000000"
    navigationBar.style.top = "-4rem"
}

big.push(function () {
    document.getElementById("top-bar").appendChild(document.getElementById("top-bar--navigation-bar"))
    closeTopBarMenu()
})
small.push(function () {
    document.getElementById("top-bar--menu").appendChild(document.getElementById("top-bar--navigation-bar"))
})
