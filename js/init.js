function init(page) {
    $("head").load("/html/main/head.html", null,
    function() {
        $("body").load("/html/main/body.html", null,
        function() {
            $("#bar").load("/html/top-bar.html", null,
            function (){changPage(page, $("#loading--area"))})
        })
    })
}