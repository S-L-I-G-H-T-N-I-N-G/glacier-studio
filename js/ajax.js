function load(url, successback, errorback) {
    var failedList = []
    var fileNum = 0
    var successed = 0
    var finished = 0

    function ifFinish(element) {
        if (failedList.length != 0) errorback(failedList)
        else if (fileNum == successed) successback(element)
    }

    function error(url, status) {
        finished++
        failedList.push({url: url, status: status})
        ifFinish()
    }

    $.get({
        url: url,
        dataType: "text",
        success: function (data) {
            function loadAdditionalFiles(element, error) {
                var children = element.children()
                for (var i = 0; i < children.length; i++) {
                    var childElement = $(children[i])
                    fileNum++
                    switch (childElement[0].tagName) {
                        case "SCRIPT":
                            loadAdditionalFile(childElement, "src",
                            function (e, data) {
                                e.html(data)
                            }, error) 
                            break
                        case "LINK":
                            if (childElement.attr("rel") == "stylesheet")
                                loadAdditionalFile(childElement, "href",
                                    function (e, data) {
                                        style = $("<style>" + data + "</style>")
                                        element.append(style)
                                }, error)
                            else if (childElement.attr("rel") == "src")
                                loadAdditionalFile(childElement, "href",
                                    function (e, data) {
                                        e.html(data)
                                        e.attr("id", e.attr("href").split("/").slice(-1)[0].split(".")[0])
                                }, error)
                            break
                        default:
                            fileNum--
                            loadAdditionalFiles(childElement)
                            break
                    }
                }
            }

            function loadAdditionalFile(e, attr, success, error) {
                if (e.attr(attr) || null != null) {
                    $.get({
                        url: e.attr(attr),
                        dataType: "text",
                        success: function (data) {
                            finished++
                            successed++
                            success(e, data)
                            e.attr(attr, null)
                            ifFinish(element)
                        },
                        error: function (xhr) {
                            error(e.attr(attr), xhr.status)
                        }
                    })
                }
            }

            var element =$(data)

            loadAdditionalFiles(element, error)
            ifFinish(element)
        },
        error: function (xhr) {
            error(url, xhr.status)
        }
    })
}

