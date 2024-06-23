
document.querySelector(".nav").addEventListener("click", (e) => {
    if (e.target.nodeName === "I") {
        let information;
        switch (e.target.getAttribute("class")) {
            case "fa-solid fa-house Home":
                information = { title: "home", bg: "red", color: "black", id: "fa-solid fa-house Home" };
                history.pushState(information, null, "Home.html");
                break;
            case "fa-solid fa-magnifying-glass search":
                information = { title: "search", bg: "green", color: "black", id: "fa-solid fa-magnifying-glass search" };
                history.pushState(information, null, "search");
                break;
            case "fa-solid fa-video explore":
                information = { title: "video", bg: "blue", color: "black", id: "fa-solid fa-video explore" };
                history.pushState(information, null, "explore");
                break;
            case "fa-solid fa-info Personal Information":
                information = { title: "information", bg: "black", color: "white", id: "fa-solid fa-info Personal Information" };
                history.pushState(information, null, "Information.html");
                break;
        }
        update(information);
    }
});

window.addEventListener("popstate", (e) => {
    if (e.state) {
        update(e.state);
    }
});

function update(information) {
    document.querySelector(".main").style.background = information.bg;
    document.querySelector("h1").innerText = information.title;
    document.querySelector("h1").style.color = information.color;
    const icons = document.querySelectorAll(".nav i");
    icons.forEach(icon => {
        if (icon.getAttributeNode("class").value == information.id){
            icon.style.color = "red"
        }
    });
}

// مدیریت رویداد popstate
window.onpopstate = function(event) {
    if (event.state) {
        update(event.state);
    }
};

