var loading = document.getElementById("page--content").innerHTML
var changPageTime
var ERROR = -1

var requestsLists = {
	"home":["css/home/center.css", "css/home/chose.css"]
}

changPage("home")

function changPage(pageName) {
    document.getElementById("page").innerHTML = loading
    changPageTime = new Date().getTime()

    var topBarNavigationButtons = document.getElementsByClassName("top-bar--navigation-button")
	var requestsList = requestsLists["home"]
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

	requestsList.push("pages/" +pageName + ".html")
	for (var i = 0;i < requestsList.length;i++) {
        (function (time) {
            httpRequest({
                httpUrl : requestsList[i],
                type : 'get'
            },function(respondDada) {
                if (isValid(time))
                    document.getElementById("page--content").innerHTML = respondDada
            }, function(status) {
                if (isValid(time)) {
				    requestsNumber = ERROR
                    document.getElementById("loading--circle").style.display = "none"
                    document.getElementById("loading--text").innerText = "错误：" + status
                }
            })
        })(changPageTime)
	}
	function isValid(time) {
		return time == changPageTime && requestsNumber != ERROR
	}
	function ok(respondUrl,respondDada) {
		requestsNumber++
		
		switch (respondUrl[0]) {
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
