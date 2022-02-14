
function setChoseWork() {
    var works = JSON.parse(document.getElementById("chose--work-list").innerText)
    var chose = document.getElementById("chose")
    for (var i = 0; i < works.length; i++) {
        chose.appendChild(createChoseWorkNode(works[i]))
    }
}

function createChoseWorkNode(work) {

    var workElement = document.createElement("div")
    workElement.classList = ["chose--work"]
    var workLink = document.createElement("a")
    workLink.target = "_blank"
    workLink.href = (function () {
        if (work.link == null) {
            return "https://shequ.codemao.cn/work/" + work.id
        } else {
            return work.link
        }
    })()
    var workCover = document.createElement("div")
    workCover.classList = ["chose--work--cover"]
    workCover.style.backgroundImage = "url(" + work.cover + ")"
    var workName = document.createElement("div")
    workName.classList = ["chose--work--name"]
    workName.innerText = work.name

    var author = work.author
    var authorLink = document.createElement("a")
    authorLink.target = "_blank"
    var authorElement = document.createElement("div")
    authorElement.classList = ["chose--work--author"]
    authorLink.href = "https://shequ.codemao.cn/user/" + work.author.id
    var authorAvatar = document.createElement("img")
    authorAvatar.classList = ["chose--work--author--avatar"]
    authorAvatar.src = author.authorurl
    var authorName = document.createElement("div")
    authorName.classList = ["chose--work--author--name"]
    authorName.innerText = author.name

    workElement.appendChild(workLink)
    workLink.appendChild(workCover)
    workLink.appendChild(workName)
    workElement.appendChild(authorLink)
    authorLink.append(authorElement)
    authorElement.appendChild(authorAvatar)
    authorElement.appendChild(authorName)

    return workElement
}

setChoseWork()