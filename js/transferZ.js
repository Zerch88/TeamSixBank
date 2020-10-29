var producto = document.getElementById('trProducto');
var banco = document.getElementById('trBanco');
var cuenta = document.getElementById('trCuenta');
var beneficiario = document.getElementById('trBeneficiario');
var importe = document.getElementById('trImporte');
var motivo = document.getElementById('trMotivo');

function transferir() {
    if (validarTransferencia()) {
        alert("Tu transferencia se ejecutó con Exito");
        window.location = "../seleccionoperacion.html";
    }
}

function validarTransferencia() {

    if (producto.value == 0) {
        alert("Debes seleccionar un Producto");
    } else if (banco.value == 0) {
        alert("Debes seleccionar un Banco");
    } else if (cuenta.value.length <= 9 || isNaN(Number(cuenta.value)) || Number(cuenta.value) < 0) {
        alert("El numero de cuenta es incorrecto debe ser minimo de 10 numeros");
    } else if (beneficiario.value.length == 0) {
        alert("Debes Ingresar el Nombre de Beneficiario");
    } else if (isNaN(Number(importe.value)) || Number(importe.value) <= 0) {
        alert("El importe debe ser numerico y no puede ser una cantidad negativa");
    } else {
        return true;
    }

}