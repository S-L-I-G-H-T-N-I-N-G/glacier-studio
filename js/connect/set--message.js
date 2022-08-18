function setMessage() {
    var text = $("#get").text()
    var date = new Date()
    var data = [{
        name: "错误",
        content: text,
        datetime: date.getFullYear() + "-" +
        (date.getMonth() + 1) + "-" +
        date.getDate() + " " +
        date.getHours() + ":" +
        date.getMinutes() + ":" +
        date.getSeconds()
    }]
    try {
        data = JSON.parse(text)
    } catch (e) {
        printError("错误：留言内容解析失败，以下是服务器返回的内容", [text])
    }
    new Vue({
        el: "#send-message",
        data: {
            data: data
        }
    })
}

setMessage()
