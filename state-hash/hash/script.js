
function hash(){
    let information;
    switch (location.hash) {
        case "":
            information = { title: "home", bg: "red", color: "black", id: "Home" };
            break;
        case "#Home":
            information = { title: "home", bg: "red", color: "black", id: "fa-solid fa-house" };
            break;
        case "#search":
            information = { title: "search", bg: "green", color: "black", id: "fa-solid fa-magnifying-glass" };
            break;
        case "#explore":
            information = { title: "video", bg: "blue", color: "black", id: "fa-solid fa-video explore" };
            break;
        case "#Information":
            information = { title: "information", bg: "black", color: "white", id: "fa-solid fa-info Personal" };
            break;
    }
    document.querySelector("h1").innerText = information.title;
    document.querySelector(".main").style.background = information.bg;
    document.querySelector("h1").style.color = information.color;
    const icons = document.querySelectorAll(".nav i");
    
    icons.forEach(icon => {
        if(icon.getAttributeNode("class").value == information.id){
            icon.style.color = "green"
        }
    })
    
}
window.addEventListener("hashchange", (e) =>{
    hash()
})