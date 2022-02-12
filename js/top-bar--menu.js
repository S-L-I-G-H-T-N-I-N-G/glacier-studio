var menuNutton = document.getElementById("top-bar--menu")
function onClickTopBarMenuButton() {
    if (topBarMenuIsOpen()) {
        closeTopBarMenu()
    } else {
        openTopBarMenu()
    }
}
function topBarMenuIsOpen() {
    return menuNutton.style.top == "4rem"
}
function openTopBarMenu() {
    menuNutton.style.top = "4rem"
}
function closeTopBarMenu() {
    menuNutton.style.top = "calc(4rem - 100vh)"
}

big.push(function () {
    document.getElementById("top-bar").appendChild(document.getElementById("top-bar--navigation-bar"))
    closeTopBarMenu()
})
small.push(function () {
    document.getElementById("top-bar--menu").appendChild(document.getElementById("top-bar--navigation-bar"))
})