// function init(page) {
//     $("head").load("/html/main/head.html", null,
//     function() {
//         $("body").load("/html/main/body.html", null,
//         function() {
//             $("#bar").load("/html/top-bar.html", null,
//             function (){changPage(page, $("#loading--area"))})
//         })
//     })
// }
function init(page) {
    var head, body, bar
    var finished = 0

    function writeIfFinished() {
        finished++
        if (finished == 3) {
            write()
        }
    }

    function write() {
        $("head").html(head)
        $("body").html(body)
        $("#bar").html(bar)
        var loadingArea = $("#loading--area")
        loadingArea.css("font-size", "3em")
        changPage(page, loadingArea)
    }

    load("/html/main/head.html", function (data) {
        head = data
        writeIfFinished()
    }, function () {})
    load("/html/main/body.html", function (data) {
        body = data
        writeIfFinished()
    }, function () {})
    load("/html/top-bar.html"  , function (data) {
        bar  = data
        writeIfFinished()
    }, function () {})
}