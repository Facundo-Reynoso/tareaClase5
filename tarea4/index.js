//Generar numeros al azar de 1 al 10

let numeroAleatorio = document.querySelectorAll('li')

for(i = 0; i < numeroAleatorio.length; i++){
    numeroAleatorio[i].innerText = Math.floor(Math.random() * 10) + 1
}

const btnAnalizar = document.querySelector('#boton-analizar')


