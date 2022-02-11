function changPage(pageName) {
    var pages = document.getElementsByClassName("top-bar--navigation-button")
    for (var i = 0;i < pages.length;i++) {
        pages[i].className = "top-bar--navigation-button"
        if (pages[i].id.includes(pageName)) {
            pages[i].className = pages[i].className + " top-bar--navigation-button--choice"
        }
    }
    document.getElementById("page").data = "pages/" + pageName
}