const API = "https://www.dnd5eapi.co";


document.addEventListener("DOMContentLoaded", function(){

    let contenedor = document.getElementById("contenedor");

    //Def crearTarjeta
    function crearTarjeta(registro){


        /* 
        <div class="imagenTarjeta">
                <img src= ${API + registro.image}></img>
            </div>
        
            
        */
        
        contenedor.innerHTML += `
        <div class="tarjeta">
        
            <div class="descTarjeta">
                <p class="monName"> Nombre: ${registro.name} </p>
                <p class="monSize"> Tamaño: ${registro.size}  </p>
                <p class ="monType"> Tipo: ${registro.type} </p>
                <p class ="monAlignment"> Alineación: ${registro.alignment}</p>
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
        <p>Cantidad de monstruos: ${data.count}</p>
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