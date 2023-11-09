const $ = document.querySelector.bind(document);
let canClick = true

$("button").addEventListener("click", function () {
    if (canClick) {
        const request = new XMLHttpRequest()
        request.open("GET", "https://api.github.com/users", true)

        request.onload = function () {
            if (this.status === 200) {
                const users = JSON.parse(this.responseText)

                users.forEach(user => {
                    if (user["id"] % 2 !== 0) {
                        const li = document.createElement("li");
                        const img = document.createElement("img")
                        img.setAttribute("src", `${user['avatar_url']}`)
                        img.setAttribute("width", "70px")
                        li.textContent = `Id : ${user["id"]} --- Username : ${user["login"]}`
                        $("#users").appendChild(li)
                        li.appendChild(img)
                    }
                });
            }
        }

        request.send()
        canClick = false

    }
})