function capturarNombre(primerNombre, segundoNombre, apellido){
    return primerNombre + ' ' + segundoNombre + ' ' + apellido 
}

const btnEnviar = document.querySelector('#enviar')

btnEnviar.onclick = function(){
    const primerNombre = document.querySelector('#primer-nombre').value
    const segundoNombre = document.querySelector('#segundo-nombre').value
    const apellido = document.querySelector('#apellido').value
    const nombreUsuario = capturarNombre(primerNombre, segundoNombre, apellido)
    const titulo = document.querySelector('#titulo')
    titulo.textContent = `Bienvenido ${nombreUsuario}!`

    return false
}
