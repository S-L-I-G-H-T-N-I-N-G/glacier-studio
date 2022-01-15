var lastWidth;

function showMenu() {
    var menu = document.getElementById("menu");
    var goto_codemao = document.getElementById("top-bar-goto-codemao");
    if (menu.style.display == "block") {
        menu.style.display = "none";
        goto_codemao.style.display = "block";
    }
    else {
        menu.style.display = "block";
        goto_codemao.style.display = "none";
    }
}

function watchWindowSize() {
    var width = document.documentElement.offsetWidth;
    if (lastWidth < 600 && 600 <= width) {
        document.getElementById("menu").style.display = "block";
        document.getElementById("menu").style.paddingLeft = "4rem";
        document.getElementById("top-bar-goto-codemao")
        .style.display = "block"
    }
    else if (width < 600 && 600 <= lastWidth) {
        document.getElementById("menu").style.display = "none";
        document.getElementById("menu").style.paddingLeft = "0";
    }
    lastWidth = width;
}
watchWindowSize
window.addEventListener("resize", watchWindowSize);