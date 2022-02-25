var loading = document.getElementById("page--content").innerHTML
var changPageTime
var ERROR = -1

var requestsLists = {
	"home": [
		"css/home/center.css",
		"css/home/chose.css",
		"pages/home.html",
		"js/home/set--chose--work.js",
		"res/home/chose--work-list.json"
	],
	"join-in": ["pages/join-in.html"]
}

changPage("home")

function changPage(pageName) {
    document.getElementById("page--content").innerHTML = loading
    changPageTime = new Date().getTime()

	var loadingText = document.getElementById("loading--text")
    var topBarNavigationButtons = document.getElementsByClassName("top-bar--navigation-button")
	var requestsList = requestsLists[pageName]
	var requestsNumber = 0
	
	var page
	var css = []
	var js = []
	var res = []
	
    for (var i = 0;i < topBarNavigationButtons.length;i++) {
        topBarNavigationButtons[i].className = "top-bar--navigation-button"
        if (topBarNavigationButtons[i].id.includes(pageName)) {
            topBarNavigationButtons[i].className = topBarNavigationButtons[i].className + " top-bar--navigation-button--choice"
        }
    }

	for (var i = 0;i < requestsList.length;i++) {
        (function (time, respondUrl) {
            httpRequest({
                httpUrl : requestsList[i],
                type : 'get'
            }, function(respondDada) {
                if (time == changPageTime && requestsNumber != ERROR)
                    ok(respondUrl, respondDada)
            }, function(status) {
                if (time == changPageTime) {
					var errorMessage = "<p>文件" + respondUrl + "请求失败：" + status + "</p>"
					if (requestsNumber == ERROR) {
						loadingText.innerHTML = loadingText.innerHTML + errorMessage
					} else {
						requestsNumber = ERROR
						document.getElementById("loading--circle").style.display = "none"
						loadingText.innerHTML = errorMessage
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
			case 'p':
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
