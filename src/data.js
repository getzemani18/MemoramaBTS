//Modulos 
import { resetgame } from "./app.js"

//estante de libros
let carteria = document.getElementById("estante")


//Funcion para esportar  el reset 
export let getCards = () => {
carteria.innerHTML = ""

resetgame()



//  Traer la data del JSON en un fetch
fetch("../data/memory.json")
.then((response) => response.json())
.then((data)  => iterarcartas(data))
.catch((error) => console.log(error))
}



//Ierar JSON libros
let iterarcartas = (data) => {
//------------Arreglo desde el JSON
  console.log(data.cartas) 
// Aqui va el sort para rrevolver las cartas

data.cartas.sort(() => Math.random() - 0.5)
//Traer dinamicamente desde el JSON
    for (const carta of data.cartas) {
        
      carteria.innerHTML += `<div class="carta-tablero">
                <div class="memorama" id='${carta.id}_flip' onclick="checkClick('${carta.Nombre}', '${carta.id}')">
                    <div class="memorama-cover" id='${carta.Nombre}' ></div>
                    <div class="memorama-back" id='${carta.value}'><img class="imagen" src='${carta.img}'></div>    
                               
                </div>
            </div>`
    }
  

//trater valor


}

