let victoria=0; derrota=0; partidas=0

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
    let intentos = 6
    let palabraOculta = [], letra, palabraArray = [], letrasFalladas = []
    let palabra = prompt("Escribe una palabra")
    palabra = palabra.toLocaleLowerCase()
    for (x = 0; x < palabra.length; x++){
        palabraOculta.push("_")
        palabraArray.push(palabra.charAt(x))
    }
    console.log(palabraArray)
    console.log(palabraOculta)
    let igual = false
    do{
        do{
            letra = prompt("Introduce una letra")
            letra = letra.toLocaleLowerCase()
    
        }while (letra.length !== 1 || !letra.match(/[a-z]/))

        if (palabra.includes(letra)){
            for (x=0; x < palabra.length; x++){
                if (letra == palabra.charAt(x)){
                    palabraOculta[x] = letra
                    console.log(palabraOculta)
                    if(palabraOculta.toString() === palabraArray.toString()){
                        victoria++
                        console.log("Felicidades!! Has ganado")
                        intentos = 0
                    }
                }
            }
        }
        else{
            intentos--
            letrasFalladas.push(letra)
            console.log(letrasFalladas)
            console.log("Tienes " + intentos + " intentos restantes")
            if (intentos == 0){
                derrota++
                console.log("Has perdido")
            }
        }
    } while (intentos > 0)
    partidas++
    menu()
}


function estadisticas(){
    console.log("Has jugado un total de " + partidas + " partidas")
    console.log("Has ganado un total de " + ((victoria*100)/partidas).toFixed(2) + "% de las partidas (" + victoria + ")")
    console.log("Has perdido un total de " + (100-(victoria*100)/partidas).toFixed(2) + "% de las partidas (" + derrota + ")")
    menu()
}

function salir(){
    console.log("Has salido del juego")
}

function botonLetras(){
    let botonesLetras = ""
    let x = document.getElementById(abecedari)
    for(x=0; x<= 26; x++){
        document.getElementById("abecedari").innerHTML=abecedari;
    }
}

function novaPartida(){

}

function vidasRestantes(){
    
}