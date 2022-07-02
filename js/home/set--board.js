function setBoard(name) {
    var date = JSON.parse($("#" + name + "-list").text())
    var parent = $("#" + name + "s")
    for (var i = 0; i < date.length; i++) {
        var node = document.createElement("div")
        node.style.display = "inline-block"
        parent.append(node)
        ReactDOM.render(createBoardNode(name, date[i]), node)
    }
}
function createBoardNode(name, date) {
    switch (name) {
        case "work":
            return createWorkNode(date)
        case "member":
            return createMemberNode(date)
    }
}
function createWorkNode(work) {
    return React.createElement("div", {className: "board--card work"},
        React.createElement("a", {target: "_blank", href: work.link},
            React.createElement("div", {className: "work--cover", style: {backgroundImage: "url(" + work.cover + ")"}}, null),
            React.createElement("div", {className: "work--name"}, work.name)
        ),
        React.createElement("a", {target: "_blank", href: work.author.homepage},
            React.createElement("img", {className: "work--author--avatar", src: work.author.avatar}, null),
            React.createElement("div", {className: "work--author--name"}, work.author.name)
        )
    )
}
function createMemberNode(member) {
    return React.createElement("a", {className: "board--card member", target: "_blank", href: member.homepage},
        React.createElement("img", {className: "member--avatar", src: member.avatar}, null),
        React.createElement("div", {className: "member--info"}, 
            React.createElement("div", {className: "member--name"}, member.name),
            React.createElement("div", {className: "member--introduction"}, "简介：" + member.introduction),
            React.createElement("div", {className: "member--rep-work"},
                "代表作：", 
                React.createElement("a", {className: "member--rep-work--link", target: "_blank", href: member.repwork.link}, member.repwork.name)
            )
        )
    )
}

setBoard("work")
setBoard("member")
