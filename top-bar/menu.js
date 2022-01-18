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
if (lastWidth >= 600) {
    document.getElementById("menu-in-bar").appendChild(menu);
}

big.push(function() {
    document.getElementById("menu-in-bar").appendChild(menu);
    closeMenu();
});
small.push(function() {
    menu_out_bar.appendChild(menu);
});
