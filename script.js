const API = "https://www.dnd5eapi.co";

document.addEventListener("DOMContentLoaded", function(){
    fetch(API + "/monsters")
    .then(response => response.json)
    .then(monster => {
        
    })
})