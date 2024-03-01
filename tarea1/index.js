function calcularSalarioMensual(salarioAnual){
    const mesesEnElAño = 12
    return salarioAnual / mesesEnElAño
}
const btnCalcular = document.querySelector('#calcular-salario-mensual')

btnCalcular.onclick = function(){
    const salarioAnual = document.querySelector('#salario-anual').value
    const salarioMensual = calcularSalarioMensual(salarioAnual)
    document.querySelector('#salario-mensual').value = salarioMensual

    return false
}
