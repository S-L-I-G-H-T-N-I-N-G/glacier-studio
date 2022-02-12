var loading = document.getElementById("page").innerHTML
var changPageTime

changPage("home")

function changPage(pageName) {
    document.getElementById("page").innerHTML = loading
    changPageTime = new Date().getTime()

    var pages = document.getElementsByClassName("top-bar--navigation-button")
    for (var i = 0;i < pages.length;i++) {
        pages[i].className = "top-bar--navigation-button"
        if (pages[i].id.includes(pageName)) {
            pages[i].className = pages[i].className + " top-bar--navigation-button--choice"
        }
    }

    (function (time) {
        httpRequest({
            httpUrl : "pages/" +pageName + ".html",
            type : 'get'
        },function(respondDada) {
            if (time == changPageTime)
                document.getElementById("page").innerHTML = respondDada
        }, function(status) {
            if (time == changPageTime) {
                document.getElementById("loading--circle").style.display = "none"
                document.getElementById("loading--text").innerText = "错误：" + status
            }
        })
    })(changPageTime)
}