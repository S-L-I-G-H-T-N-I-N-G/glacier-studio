var lastWidth;

function showMenu() {
    var menu_out_bar = document.getElementById("menu-out-bar");
    if (menu_out_bar.style.display == "block")
        menu_out_bar.style.display = "none";
    else
        menu_out_bar.style.display = "block";
}

function watchWindowSize() {
    var width = document.documentElement.offsetWidth;
    if (lastWidth < 600 && 600 <= width) {
        document.getElementById("menu-in-bar")
        .appendChild(document.getElementById("menu"));
    }
    else if (width < 600 && 600 <= lastWidth) {
        menu_out_bar = document.getElementById("menu-out-bar")
        menu_out_bar.appendChild(document.getElementById("menu"));
        menu_out_bar.style.display = "none"
    }
    lastWidth = width;
}
window.addEventListener("resize", watchWindowSize);
watchWindowSize();

if (lastWidth >= 600) {
    document.getElementById("menu-in-bar")
    .appendChild(document.getElementById("menu"));
}