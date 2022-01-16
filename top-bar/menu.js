var lastWidth;

function onClickMenuButton() {
    //var menu_out_bar = document.getElementById("menu-out-bar");
    //if (menu_out_bar.style.display == "block")
    //    menu_out_bar.style.display = "none";
    //else
    //    menu_out_bar.style.display = "block";
    var menu_out_bar = document.getElementById("menu-out-bar");
    openMemu();
    if (menu_out_bar.style.bottom == 0)
        menu_out_bar.style.animationDuration = "reverse";
}

function openMemu() {
    var menu_out_bar = document.getElementById("menu-out-bar");
    menu_out_bar.style.animationName = null;
    menu_out_bar.style.animationName = "open-menu";
	menu_out_bar.style.animationDuration = "1s";
    menu_out_bar.style.animationIterationCount = 1;
    menu_out_bar.style.animationFillMode = "forwards";
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
        //menu_out_bar.style.display = "none"
    }
    lastWidth = width;
}
window.addEventListener("resize", watchWindowSize);
watchWindowSize();

if (lastWidth >= 600) {
    document.getElementById("menu-in-bar")
    .appendChild(document.getElementById("menu"));
}