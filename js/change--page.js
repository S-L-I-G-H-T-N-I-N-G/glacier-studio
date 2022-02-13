var loading = document.getElementById("page--content").innerHTML
var changPageTime
var ERROR = -1

var requestsLists = {
	"home": ["css/home/center.css", "css/home/chose.css", "pages/home.html"],
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
	var csses = []
	var jses = []
	
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
            },function(respondDada) {
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
		switch (respondUrl.charAt(0)) {
			case 'p':
				page = respondDada
				break
			case 'c':
				csses.push(respondDada)
				break
			case 'j':
				jses.push(respondDada)
				break
		}
		if (AllRespondFinished()) writePageCode()
	}
	function AllRespondFinished() {
		return requestsNumber == requestsList.length
	}
	function writePageCode() {
		var style = document.getElementById("page--css")
		style.innerHTML = ""
		for (var i = 0;i < csses.length;i++) {
			 var css = document.createElement("style")
			 css.innerHTML = csses[i]
			 style.appendChild(css)
		}


		
		document.getElementById("page--content").innerHTML = page
		
		var script = document.getElementById("page--js")
		script.innerHTML = ""
		for (var i = 0;i < jses.length;i++) {
			 var js = document.createElement("script")
			 js.innerHTML = jses[i]
			 script.appendChild(css)
		}
	}
}
