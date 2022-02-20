var menuNutton = document.getElementById("top-bar--menu")
var navigationBar = document.getElementById("top-bar--navigation-bar")
var menuAnimationStartTime

function onClickTopBarMenuButton() {
    if (topBarMenuIsOpen()) {
        closeTopBarMenu()
    } else {
        openTopBarMenu()
    }
}
function topBarMenuIsOpen() {
    return navigationBar.style.top == "4rem"
}
function openTopBarMenu() {
	menuAnimationStartTime = new Date().getTime()
	menuNutton.style.height = "calc(100vh - 4rem)"
    menuNutton.style.background = "#00000088"
    navigationBar.style.top = "4rem"
}
function closeTopBarMenu() {
	menuAnimationStartTime = new Date().getTime()
	var time = menuAnimationStartTime
	setTimeout(function () {
		if (time == menuAnimationStartTime)
		    menuNutton.style.height = "0px"
	}, 500)
    menuNutton.style.background = "#00000000"
    navigationBar.style.top = "-4rem"
}

big.push(function () {
    document.getElementById("top-bar").appendChild(document.getElementById("top-bar--navigation-bar"))
    closeTopBarMenu()
})
small.push(function () {
    document.getElementById("top-bar--menu").appendChild(document.getElementById("top-bar--navigation-bar"))
})
