const API = "https://www.dnd5eapi.co";


document.addEventListener("DOMContentLoaded", function(){

    let contenedor = document.getElementById("contenedor");

    //Def crearTarjeta
    function crearTarjeta(registro){

        function caps(string) {
            return string[0].toUpperCase() + string.slice(1);
        }
        /* 
        <div class="imagenTarjeta">
                <img src= ${API + registro.image}></img>
            </div>
        
            
        */
        
        contenedor.innerHTML += `
        <div class="tarjeta">
        
            <div class="descTarjeta">
                <p class="monName"> Name: ${registro.name} </p>
                <p class="monSize"> Size: ${registro.size}  </p>
                <p class ="monType"> Type: ${caps(registro.type)} </p>
                <p class ="monAlignment"> Alignment: ${caps(registro.alignment)}</p>
            </div>
        <div>
        `
    }



    //Fetch 
    fetch(API + "/api/monsters")
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        document.getElementById("titulo").innerHTML += `
        <p>Number of monsters: ${data.count}</p>
        `
        for (let i of data.results){
            let monsterURL = API + i.url;
            fetch(monsterURL)
            .then (response => response.json())
            .then (info =>  crearTarjeta(info))
            .catch(error => alert(error));
        }
    })
    .catch(error => alert(error));
})