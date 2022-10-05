function updateButtons() {
    var buttons = $(".button")
    buttons.hover(null, function () {
        buttonWaveRetreat($(this))
    })
    buttons.mousedown(function (event) {
        buttonWaveSwingAway($(this), event.pageX - $(this).offset().left, event.pageY - $(this).offset().top)
    })
    buttons.mouseup(function () {
        buttonWaveRetreat($(this))
    })
}

function buttonWaveSwingAway(element, x, y) {
    element.attr("data-swing-away-progress", "0")
    element.attr("data-retreat-progress", "100")
    element.attr("data-retreat", "0")
    setButtonWave(element, x, y)
}

function buttonWaveRetreat(element) {
    element.attr("data-retreat", "1")
}

function setButtonWave(element, x, y) {
    var swingAwayProgress = parseInt(element.attr("data-swing-away-progress"))
    var retreatProgress = parseInt(element.attr("data-retreat-progress"))
    var retreat = element.attr("data-retreat") == "1"

    element.css("background-image",
        `radial-gradient(circle at ${x}px ${y}px, #808080${(
        40 * retreatProgress / 100).toString().padStart(2, '0')} ${
        swingAwayProgress}%, #00000000 ${swingAwayProgress + 10}%)`)

    if (swingAwayProgress < 100) {
        swingAwayProgress += 5
        element.attr("data-swing-away-progress", swingAwayProgress)
    }
    if (retreatProgress > 0 && retreat) {
        retreatProgress -= 5
        element.attr("data-retreat-progress", retreatProgress)
    }
    if (swingAwayProgress < 100 || retreatProgress > 0)
        setTimeout(function () {
            setButtonWave(element, x, y)
        }, 30)
}
