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

    function finish() {
        $("#loading").remove()
        closeTopBarMenu()
    }

    function success(data) {
        if (startTime == lastChangPageTime) {
            finish()
            $("#error").html(null)
            history.pushState("冰川工作室", "冰川工作室", "/" + pageName)
            changNavButton()
            $("#page--content").html(data)
        }
    }

    function error(list) {
        if (startTime == lastChangPageTime) {
            finish()
            $("#error").html("<h2>错误：页面 " + pageName + " 加载失败</h2>")
            for (var i = 0; i < list.length; i++)
                $("#error").append($("<p>文件 " + list[i].url + " 加载失败，错误码："+ list[i].status + "</p>"))
        }
    }

    element.prepend(loading)
    loading.css({
        "width": element.css("font-size"),
        "height": element.css("font-size"),
        "border-bottom-color": element.css("color")
    })
    load("/html/" + pageName + ".html", success, error)
}
