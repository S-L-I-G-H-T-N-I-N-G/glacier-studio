var loading = document.getElementById("page--content").innerHTML
var changPageTime
var ERROR = -1

var requestsLists = {
    "home": [
        "css/home/board.css",
        "css/home/center.css",
        "css/home/works.css",
        "css/home/members.css",
        "html/home.html",
        "js/home/set--board.js",
        "res/home/work-list.json",
        "res/home/member-list.json"
    ],
    "join-in": ["html/join-in.html"]
}

function changPage(pageName) {
    document.getElementById("page--content").innerHTML = loading
    history.pushState("冰川工作室", "冰川工作室", "/" + pageName);
    changPageTime = new Date().getTime()

    var loadingText = document.getElementById("loading--text")
    var topBarNavButtons = document.getElementsByClassName("top-bar--nav-button")
    var requestsList = requestsLists[pageName]
    var requestsNumber = 0
    
    var page
    var css = []
    var js = []
    var res = []
    
    for (var i = 0;i < topBarNavButtons.length;i++) {
        topBarNavButtons[i].className = "top-bar--nav-button"
        if (topBarNavButtons[i].id.includes(pageName)) {
            topBarNavButtons[i].className = topBarNavButtons[i].className + " top-bar--nav-button--choice"
        }
    }

    for (var i = 0;i < requestsList.length;i++) {
        (function (time, respondUrl) {
            $.get({
                url: respondUrl,
                dataType: "text",
                success: function (data) {
                    if (time == changPageTime && requestsNumber != ERROR)
                        ok(respondUrl, data)
                },
                error: function (data, status) {
                    if (time == changPageTime) {
                        var errorMessage = "<p>文件" + respondUrl + "请求失败：" + status + "</p>"
                        if (requestsNumber == ERROR) {
                            loadingText.innerHTML += errorMessage
                        } else {
                            requestsNumber = ERROR
                            $("#loading--circle").css("display", "none")
                            $("#loading").css({"display": "block"})
                            loadingText.innerHTML = errorMessage
                        }
                    }
                }
            })
        })(changPageTime, requestsList[i])
    }
    function ok(respondUrl, respondDada) {
        requestsNumber++
        var data = {
            "id": respondUrl.split("/").slice(-1)[0].split(".")[0],
            "content": respondDada
        }
        switch (respondUrl.charAt(0)) {
            case 'h':
                page = respondDada
                break
            case 'c':
                css.push(data)
                break
            case 'j':
                js.push(data)
                break
            case 'r':
                res.push(data)
                break
        }
        loadingText.innerText = "加载中……" + requestsNumber / requestsList.length * 100 + "%"
        if (AllRespondFinished()) writePageCode()
    }
    function AllRespondFinished() {
        return requestsNumber == requestsList.length
    }
    function writePageCode() {
        writeCodeIntoElement(document.getElementById("page--css"), css, "style")
        writeCodeIntoElement(document.getElementById("page--res"), res, "div")
        
        document.getElementById("page--content").innerHTML = page
        
        writeCodeIntoElement(document.getElementById("page--js"), js, "script")
    }
    function writeCodeIntoElement(element, data, childType) {
        element.innerHTML = ""
        for (var i = 0; i < data.length; i++) {
            var child = document.createElement(childType)
            child.id = data[i].id
            child.innerHTML = data[i].content
            element.appendChild(child)
        }
    }
}
