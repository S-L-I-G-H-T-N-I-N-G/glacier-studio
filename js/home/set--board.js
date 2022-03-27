function setBoard() {
	setWorks()
	setMembers()
}

function setWorks() {
    var works = JSON.parse(document.getElementById("work-list").innerText)
    var worksElement = document.getElementById("works")
    for (var i = 0; i < works.length; i++) {
        worksElement.appendChild(createWorkNode(works[i]))
    }
}

function createWorkNode(work) {

    var workElement = document.createElement("div")
    workElement.classList = ["board--card work"]
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
    workCover.classList = ["work--cover"]
    workCover.style.backgroundImage = "url(" + work.cover + ")"
    var workName = document.createElement("div")
    workName.classList = ["work--name"]
    workName.innerText = work.name

    var author = work.author
    var authorLink = document.createElement("a")
    authorLink.target = "_blank"
    var authorElement = document.createElement("div")
    authorElement.classList = ["work--author"]
    authorLink.href = "https://shequ.codemao.cn/user/" + work.author.id
    var authorAvatar = document.createElement("img")
    authorAvatar.classList = ["work--author--avatar"]
    authorAvatar.src = author.authorurl
    var authorName = document.createElement("div")
    authorName.classList = ["work--author--name"]
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

function setMembers() {
	var members = JSON.parse(document.getElementById("member-list").innerText)
	var membersElement = document.getElementById("members")
	for (var i = 0; i < members.length; i++) {
		membersElement.appendChild(createMemberNode(members[i]))
	}
}

function createMemberNode(member) {
	
	var memberElement = document.createElement("a")
	memberElement.classList = ["board--card member"]
	memberElement.target = "_blank"
	memberElement.href = (function () {
        if (member.link == null) {
            return "https://shequ.codemao.cn/user/" + member.id
        } else {
            return member.link
        }
    })()
	var memberAvatar = document.createElement("img")
	memberAvatar.classList= ["member--avatar"]
	memberAvatar.src = member.avatarurl
	var memberInfo = document.createElement("div")
	memberInfo.classList = ["member--info"]
	var memberName = document.createElement("div")
	memberName.classList = ["member--name"]
	memberName.innerText = member.name
	var memberIntroduction = document.createElement("div")
	memberIntroduction.classList = ["member--introduction"]
	memberIntroduction.innerText = "简介：" + member.introduction
	
	var repWorks = member.repworks
	var repWorksElement = document.createElement("div")
	repWorksElement.classList = ["member--rep-works"]
	repWorksElement.innerText = "代表作："
	for (var i = 0; i < repWorks.length; i++) {
		var repWork = document.createElement("a")
		repWork.classList = ["member--rep-work"]
		repWork.target = "_blank"
		repWork.innerText = repWorks[i].name
		repWork.href = (function () {
			if (repWorks[i].link == null) {
				return "https://shequ.codemao.cn/work/" + repWorks[i].id
			} else {
				return repWorks[i].link
			}
		})()
		repWorksElement.appendChild(repWork)
		if (i != repWorks.length - 1) repWorksElement.append(" ")
	}
	
	memberElement.appendChild(memberAvatar)
	memberElement.appendChild(memberInfo)
	memberInfo.append(memberName)
	memberInfo.appendChild(memberIntroduction)
	memberInfo.appendChild(repWorksElement)
	
	return memberElement
}

setBoard()
