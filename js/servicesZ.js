const classSelected = "card-img-selected";
var srTP = document.getElementById('srTP');
var srTC = document.getElementById('srTC');
var srCF = document.getElementById('srCF');
var srIZ = document.getElementById('srIZ');
var srLI = document.getElementById('srLI');
var srTM = document.getElementById('srTM');
var srReferencia = document.getElementById('srReferencia');
var srImporte = document.getElementById('srImporte');

var seleccionado = 0;

function seleccionarServicio(x) {
    borrarClaseSelect(seleccionado);
    agregarClaseSelect(x)
    seleccionado = x;
}

function agregarClaseSelect(x) {
    switch (x) {
        case 1:
            srTP.classList.add('card-img-selected');
            break;
        case 2:
            srTC.classList.add('card-img-selected');
            break;
        case 3:
            srCF.classList.add('card-img-selected');
            break;
        case 4:
            srIZ.classList.add('card-img-selected');
            break;
        case 5:
            srLI.classList.add('card-img-selected');
            break;
        case 6:
            srTM.classList.add('card-img-selected');
            break;
        default:
            break;
    }
}

function borrarClaseSelect(x) {
    switch (x) {
        case 1:
            srTP.classList.remove('card-img-selected');
            break;
        case 2:
            srTC.classList.remove('card-img-selected');
            break;
        case 3:
            srCF.classList.remove('card-img-selected');
            break;
        case 4:
            srIZ.classList.remove('card-img-selected');
            break;
        case 5:
            srLI.classList.remove('card-img-selected');
            break;
        case 6:
            srTM.classList.remove('card-img-selected');
            break;
        default:
            break;
    }
}

function pagarServicio() {
    if (validarPago()) {
        alert("Tu Pago de Servicio se ha pagado con exito");
        window.location = "../seleccionoperacion.html";
    }
}

function validarPago() {

    if (!seleccionado > 0) {
        alert("Debes seleccionar un Servicio");
    } else if (srReferencia.value.length == 0) {
        alert("Debes Ingresar una Referencia");
    } else if (isNaN(Number(srImporte.value)) || Number(srImporte.value) <= 0) {
        alert("El importe debe ser numerico y no puede ser una cantidad negativa");
    } else {
        return true;
    }

}

function regresar() {
    window.location = "../seleccionoperacion.html";
}