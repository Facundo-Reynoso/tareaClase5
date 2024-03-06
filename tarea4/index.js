//Generar numeros al azar de 1 al 10

let numeroAleatorio = document.querySelectorAll('li')
let numeros = []

for(i = 0; i < numeroAleatorio.length; i++){
    numeroAleatorio[i].textContent = Math.floor(Math.random() * 10) + 1
    numeros.push(Number(numeroAleatorio[i].textContent))
}

const btnAnalizar = document.querySelector('#boton-analizar')

function analizarPromedio(){
    let acumulador = 0
    for(i = 0; i < numeros.length; i++){
        acumulador += numeros[i]
    }
    let promedio = acumulador / numeros.length
    return promedio
}
