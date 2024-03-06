//Generar formularios

const btnGenerarFormularios = document.querySelector('#btn-generar-formulario-2')
let btnCalcularDuracion = document.querySelector('#calcular-duracion')

btnGenerarFormularios.onclick = function(){
    let cantidadDeClases = Number(document.querySelector('#cantidad-de-clases').value)

    for(i = 1; i<=cantidadDeClases; i++){
        let formulario2 = document.querySelector('#formulario-2')

        formulario2.innerHTML += `<h2>Ingrese los datos de la clase ${i}</h2>
        <label for="horas-clase-${i}">Ingrese la cantidad de horas de la clase ${i}</label>
        <input type="number" min="0" id="horas-clase-${i}" required>
        <br>
        <label for="minutos-clase-${i}">Ingrese la cantidad de minutos de la clase ${i}</label>
        <input type="number" min="0" max="59" id="minutos-clase-${i}" required>
        <br>
        <label for="segundos-clase-${i}">Ingrese la cantidad de segundos de la clase ${i}</label>
        <input type="number" min="0" max="59" id="segundos-clase-${i}" required>
        <br>`
    }

    btnCalcularDuracion.innerHTML = `<button id="btn-calcular-duracion">Calcular duracion del curso</button>`
    btnCalcularDuracion = document.querySelector('#btn-calcular-duracion')
    
    return false
}

//Calcular Duracion

btnCalcularDuracion.onclick = function(){
    const cantidadDeClases = Number(document.querySelector('#cantidad-de-clases').value)
    const resultadoDuracion = document.querySelector('#resultado')

    let sumaHoras = 0
    let sumaMinutos = 0
    let sumaSegundos = 0

    for(i = 1; i <= cantidadDeClases ; i++){
        sumaHoras += Number(document.querySelector(`#horas-clase-${i}`).value);
        sumaMinutos += Number(document.querySelector(`#minutos-clase-${i}`).value);
        sumaSegundos += Number(document.querySelector(`#segundos-clase-${i}`).value);
    }

    let segundosTotales = sumaSegundos % 60
    let minutosTotales = (sumaMinutos % 60) + Math.floor(sumaSegundos / 60)
    let horasTotales = sumaHoras + Math.floor(sumaMinutos / 60)

    resultadoDuracion.innerText = `El cursado tiene una duración de ${horasTotales} hora(s), ${minutosTotales} minuto(s), ${segundosTotales} segundo(s)`

}
