function setMessage() {
    var date = JSON.parse($("#get").text())
    new Vue({
        el: "#send-message",
        data: {
            data: date
        }
    })
}

setMessage()
