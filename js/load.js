function load(page) {
    $("head").load("/html/main/head.html")
    $("body").load("/html/main/body.html", null,
    function() {
        $("#bar").load("/html/top-bar.html", null,
        function (){changPage(page)})
    })
}