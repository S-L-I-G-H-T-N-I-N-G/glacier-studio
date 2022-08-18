var closeButton = "<button onclick=\"$('#error').html(null)\" style=\"float: right;\">╳</button>"

function printError(title, message) {
    var error = $("#error")
    if (error.html() == "") {
        error.html(closeButton)
    }
    for (var i = message.length - 1; i >= 0 ; i--)
        error.prepend("<p>" + message[i] + "</p>")
    error.prepend("<h2>" + title + "</h2>")
    document.documentElement.scrollTop = 0
}
