function novaPartida(){
    crearAbecedario()
}

function crearAbecedario(){
    let caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÇ"
    let contenedor = document.getElementById("abecedari")

    let html = "";
    let letra 
    
    for (x=0; x < caracteres.length; x++){
        letra = (caracteres.charAt(x))

        html += `<button id=${letra} onclick="usaLetra('${letra}')">${letra}</button>`
    }
    contenedor.innerHTML = html;    
}

function usaLetra(letra){
    alert("Has selecionado la letra: " + letra)
}

