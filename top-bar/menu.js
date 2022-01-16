var lastWidth;
var menu_out_bar = document.getElementById("menu-out-bar");
var menu = document.getElementById("menu");

function onClickMenuButton() {
    if (menu_out_bar.style.right == "0%")
        closeMenu();
    else
        openMenu();
}
function openMenu() {
    menu_out_bar.style.right = "0%";
}
function closeMenu() {
    menu_out_bar.style.right = "100%";
}
function watchWindowSize() {
    var width = document.documentElement.offsetWidth;
    if (lastWidth < 600 && 600 <= width) {
        document.getElementById("menu-in-bar")
        .appendChild(menu);

        closeMenu();
    }
    else if (width < 600 && 600 <= lastWidth) {
        menu_out_bar.appendChild(menu);
    }
    lastWidth = width;
}
window.addEventListener("resize", watchWindowSize);
watchWindowSize();

if (lastWidth >= 600) {
    document.getElementById("menu-in-bar").appendChild(menu);
}