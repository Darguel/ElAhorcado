function menu(){
    let x;
    console.log("1- Jugar   2- Estadisticas   3- Salir")
    do {
        x = parseInt(prompt("Elige una opción del menu"))
        if(x == 1){
            jugar()
        }
        else if(x == 2){
            estadisticas()
        }
        else if(x == 3){
            salir()
        }
        else{
            console.log("Escribe un numero del menú")
        }
    } while (x < 1 || x > 3)
}

function jugar(){
    let permitido = ""
    let palabraOculta = "", letra
    let palabra = prompt("Escribe una palabra")
    for (x = 0; x < palabra.length; x++){
        palabraOculta += ("_ ")
    }
    console.log(palabraOculta)

    do{
        letra = prompt("Introduce una letra")

    }while (letra.length !== 1 || !letra.match(/[a-z]/))
    
    
}

function estadisticas(ganadas,jugadas){
    console.log("Has jugado un total de " + jugadas + " partidas")
    console.log("Has jugado un total de " + jugadas/(ganadas*100) + " partidas")
    console.log("Has ganado un total de " + jugadas/(ganadas*100) + " partidas")
}

function salir(){
    console.log("Has salido del juego")
}