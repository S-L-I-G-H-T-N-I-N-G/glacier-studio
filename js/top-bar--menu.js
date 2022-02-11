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