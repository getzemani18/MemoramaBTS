//Importar modulos
import { getCards } from "./data.js"
getCards()

//Jugadores
let player1 = document.getElementById("play1")
let player2 = document.getElementById("play2")
let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
player2.style.color = "#fff"
player1.style.color = "#BF00FF"
score1.innerHTML = "0"
score2.innerHTML = "0"

//------------------Pantallas 
document.getElementById("pantalla2").hidden= true;
document.getElementById("pantalla3").hidden = true;


// Inputs
// Boton iniciar desde los userName a la segunda pantalla 
let entrar = document.getElementById("botoninicio")
entrar.addEventListener("click", () => {
    document.getElementById("pantalla1").hidden = true
    document.getElementById("pantalla2").hidden = false
    play1.innerHTML = "Jugador 1 : " + document.getElementById("input1").value 
    play2.innerHTML = "Jugador 2  : " + document.getElementById("input2").value 
})

//Boton pantalla dos 
//Boton pra entrar facil
let botons = document.getElementById("botonfacil")
botons.addEventListener("click", () => {
    document.getElementById("pantalla1").hidden = true
    document.getElementById("pantalla2").hidden = true
    document.getElementById("pantalla3").hidden = false
    //Alert Indicaciones
    alert("Indicaciones: En este tipo de dificultad sera diferente a un juego de memorama")
    alert("Este memorama NO es un memorama normal, cada par es una imagen diferente. OJO checa bien sus rostros")
})

//Boton para reiniciar el juego
let Botonreiniciar = document.getElementById("reiniciargame")
Botonreiniciar.addEventListener("click", () => {
 console.log(Botonreiniciar, "regresar")
 location.reload()
     document.getElementById("pantalla1").hidden = false
    document.getElementById("pantalla2").hidden = true
}) 


//----------Replay Button------
let ResertGame = document.getElementById("resetgame")

ResertGame.addEventListener("click", getCards);


