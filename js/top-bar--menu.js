var menu = $("#top-bar--menu")
var navBar = $("#top-bar--nav-bar")

function onClickTopBarMenuButton() {
    if (topBarMenuIsOpen()) {
        closeTopBarMenu()
    } else {
        openTopBarMenu()
    }
}
function topBarMenuIsOpen() {
    return menu.css("pointer-events") == "auto"
}
function openTopBarMenu() {
    menu.css({"pointer-events": "auto", "background": "#00000088"})
    navBar.css("top", "4rem")
}
function closeTopBarMenu() {
    menu.css({"pointer-events": "none", "background": "#00000000"})
    navBar.css("top", "-4rem")
}

big.push(function () {
    $("#top-bar").append($("#top-bar--nav-bar"))
    closeTopBarMenu()
})
small.push(function () {
    $("#top-bar--menu").append($("#top-bar--nav-bar"))
})
