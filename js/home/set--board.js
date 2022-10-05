function setBoard(name) {
    var date = JSON.parse($("#" + name + "-list").text())
    new Vue({
        el: "#" + name + "s",
        data: {
            data: date
        }
    })
}

function setBoards() {
    setBoard("work")
    setBoard("member")
}

setBoards()
updateButtons()
