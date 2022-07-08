var hint = $("<div id='hint'></div>")

hint.css({
    "position": "fixed",
    "opacity": "0",
    "left": "0",
    "bottom": "0",
    "padding": "2px 4px",
    "background": "#FFF",
    "transition": "all 256ms",
    "border": "0.1rem solid #00000055",
    "font-size": "12px",
    "pointer-events": "none"
})

$("body").append(hint)

function sethint() {
    var element = document.elementFromPoint(event.clientX, event.clientY)
    var hintval
    while (1) {
        try {
            hintval = element.dataset.hint || element.dataset.link || null
            if (hintval == null) element = element.parentNode
            else break
        } catch {
            hint.css("opacity", "0")
            return
        }
    }
    hint.css("opacity", "1")/* 
    hint.css({
        "left": event.clientX + 16,
        "top": event.clientY + 16,
    }) */
    hint.text(hintval)
}

onmousemove = sethint
