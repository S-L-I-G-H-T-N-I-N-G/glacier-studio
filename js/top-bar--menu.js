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
    return menu.hasClass("top-bar--menu--open")
}
function openTopBarMenu() {
    menu.addClass("top-bar--menu--open")
    navBar.addClass("top-bar--nav-bar--open")
}
function closeTopBarMenu() {
    menu.removeClass("top-bar--menu--open")
    navBar.removeClass("top-bar--nav-bar--open")
}

big.push(function () {
    $("#top-bar").append($("#top-bar--nav-bar"))
    closeTopBarMenu()
})
small.push(function () {
    $("#top-bar--menu").append($("#top-bar--nav-bar"))
})
