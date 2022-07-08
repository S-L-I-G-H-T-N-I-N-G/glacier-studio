onclick = function() {
    var element = document.elementFromPoint(event.clientX, event.clientY)
    var link
    while (1) {
        try {
            link = element.dataset.link || null
            if (link == null) element = element.parentNode
            else break
        } catch { return }
    }
    open(link, "_blank")
}