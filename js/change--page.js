var loading = $("<div id=\"loading\"></div>")
var lastChangPageTime

function changPage(pageName, element) {
    var startTime = new Date().getTime()
    lastChangPageTime = startTime
    $("#loading").remove()

    function changNavButton() {
        var navButtons = $(".top-bar--nav-button")
        for (var i = 0;i < navButtons.length;i++) {
            var button = $(navButtons[i])
            button.removeClass("top-bar--nav-button--choice")
            if (button.attr("id").includes(pageName))
                button.addClass("top-bar--nav-button--choice")
        }
    }

    function success(data) {
        if (startTime == lastChangPageTime) {
            $("#page--content").html(data)
            $("#loading").remove()
            changNavButton()
        }
    }

    function error() {
        alert("页面" + pageName + "加载失败")
        $("#loading").remove()
    }

    element.prepend(loading)
    history.pushState("冰川工作室", "冰川工作室", "/" + pageName)
    load("/html/" + pageName + ".html", success, error)
}
