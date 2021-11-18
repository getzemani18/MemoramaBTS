
//------Memorama Clicks y cartas 
//Definidmos variables para las acciones de las cards 
let click = false;
let carta1;
let id1;
let carta2;
let id2;
let turn = true
let search = 0
let search2 = 0
let bloquear = false 








//------------Funcion Global para el funcionamiento de las  cartas
window.gameTest = {
    
       checkMatch : (cardName, cardid) => {
        if(bloquear) return
           console.log(cardName, cardid)
         //--------------------Voltear cartas-------------------
         //Traer los cliks 
         playFondo()
          let cardFlip = document.getElementById(cardid + "_flip")
          let cardFlip2 = document.getElementById(id1 + "_flip")
           cardFlip.style.transform = "rotateY(180deg)"
           
           
        // Traer los ID para los jugadores 

           if(click == false) {
               // primer click con una carta y valor 
               
               carta1 = cardName
               id1 = cardid
               click = true;
               //alert("primer click a" + carta1 + " " + id1)
               
               
           } else {
               // segundo click con otra carta y su valor, carta2, valor 2
               
               carta2 = cardName
               id2 = cardid
               //alert("segundo click a:" + carta2 + " " + id2)
               click= false;
            
            
            if (carta1 == carta2 && id1 != id2) {
                //-----comparar si la carta1 == carta2 es un match 
                
                carta1= null
                id1= null
                carta2= null
                id2=null;
                cardFlip.removeAttribute("onclick")
                cardFlip2.removeAttribute("onclick")
                playMatch()
                
                // Turnos para match
                if(turn) {
                    console.log("turno player 2")

                    search++;
                    document.getElementById("score1").innerHTML = search;
                validacion(search, search2)
                } else {

                    search2++
                    document.getElementById("score2").innerHTML = search2;
                validacion(search, search2)
                }
                
                //sonidos
            } else {
                
                bloquear = true
                playNoMatch()
                setTimeout( () => {
                cardFlip.style.transform = ""
                let cardFlip2 = document.getElementById(id1 + '_flip')
                cardFlip2.style.transform = ""
                carta1 = null
                id1 = null
                carta2 = null
                id2 = null
                bloquear = false
              }, 1000  )
              //Cuando No es match si se cambia el turno
              if(turn) {
                  turn = false
                  document.getElementById("play1").style.color = "#fff"
                  document.getElementById("play2").style.color = "#f79105"
              } else {
                  turn = true;
                    document.getElementById("play1").style.color = "#ea3634";
                    document.getElementById("play2").style.color = "#fff"
              }

            }
         
           }
           

}
}
// ----------------------------FUNCIONES: para los audios------------------------------------
    //----Funcion Match
            function playMatch () {
                const SonidoMatch = document.getElementById("SonidoMatch")
                console.log(SonidoMatch, "si jaka")
                SonidoMatch.volume = 0.3;
                SonidoMatch.play()
                
           }

    //----Funcion NoMatch
            function playNoMatch () {
                const SonidoNoMatch = document.getElementById("SonidoNoMatch")
                SonidoNoMatch.volume = 0.3;
                SonidoNoMatch.play()
           }

    //---Funcion Fondo 
            function  playFondo () {
                const SonidoFondo = document.getElementById("SonidoFondo")
                SonidoFondo.volume = 0.1;
                SonidoFondo.loop = true
                SonidoFondo.play()
            }
    //----Funcion Ganador
            function playGanador () {
                const SonidoGanador = document.getElementById("SonidoGanador")
                SonidoGanador.volume = 0.2;
                SonidoGanador.play()
            }

    // //-----Funcion Flip
    //        function playFlip() { 
    //            const SonidoFlip = document.getElementById("SonidoFlip")
    //            SonidoFlip.play()
    //        }


           // Funcion para que aprezca un alert para el ganador 
            function validacion(search, search2) {
                setTimeout(() => {
                   if (search + search2 == 7) {
                       if ( search > search2) {
                           playGanador()
                           alert(`Felicidades!  ${document.getElementById("input1").value}, Pronto sabras reconocerlos al 50%`  )
                           console.log(validacion, "sirve")
                           
                       } else {
                           if (search < search2) {
                               playGanador()
                               alert(`Felicidades!  ${document.getElementById("input2").value}, Seras un A.R.M.Y pronto`)
                               
                           }
                       }
                   }
                },500)
            }


export let resetgame = () => {
    console.log(search, search2, "iniciar")
    search = ""
    search2 = ""
    document.getElementById("score1").innerHTML = search;
    document.getElementById("score2").innerHTML = search2;
}