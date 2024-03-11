//Generar numeros al azar de 1 al 10

let numeroAleatorio = document.querySelectorAll('li')
let numeros = []

for(i = 0; i < numeroAleatorio.length; i++){
    numeroAleatorio[i].textContent = Math.floor(Math.random() * 10) + 1
    numeros.push(Number(numeroAleatorio[i].textContent))
}

//funciones para analizar los numeros

function analizarPromedio(){
    let acumulador = 0
    for(i = 0; i < numeros.length; i++){
        acumulador += numeros[i]
    }
    let promedio = acumulador / numeros.length
    return promedio
}

function analizarMenor(){
    let numeroMenor = Math.min(...numeros)
    return numeroMenor
}

function analizarMayor(){
    let numeroMayor = Math.max(...numeros)
    return numeroMayor
}

function analizarMasRepetido(){
    let numeroMasRepetido;
    let repeticiones = 0

    for(i = 0; i < numeros.length; i++){
        const numeroActual = numeros[i]
        let conteoActual = 1

        
        for(j = 0; j < numeros.length; j++){
          if(numeroActual === numeros[j]){
            conteoActual++
          }
        }

        if(conteoActual > repeticiones){
          numeroMasRepetido = numeroActual
          repeticiones = conteoActual
        }
    }

    return numeroMasRepetido
}

//funcion para mostrar los resultados
  
const btnAnalizar = document.querySelector('#boton-analizar')
btnAnalizar.onclick = function(){
  const promedio = document.querySelector('#promedio')
  promedio.textContent = `El promedio es ${analizarPromedio()}`
  const numeroMenor = document.querySelector('#menor')
  numeroMenor.textContent = `El numero mas pequeño es ${analizarMenor()}`
  const numeroMayor = document.querySelector('#mayor')
  numeroMayor.textContent = `El numero mas grande es ${analizarMayor()}`
  const numeroMasRepetido = document.querySelector('#mas-repetido')
  numeroMasRepetido.textContent = `El numero mas frecuente es ${analizarMasRepetido()}`
}
