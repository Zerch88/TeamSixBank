const nips = ["1234", "0000", "7894"]
var intentosNip = 0;
var nipInpt = document.getElementById('nip');

function ingresaNip() {
    var nip = nipInpt.value;
    if (nip.length !== 4) {
        alert("El NIP debe ser de 4 digitos.");
        nipInpt.value = "";
    } else if (isNaN(Number(nip))) {
        alert("El NIP debe ser numerico");
        nipInpt.value = "";
    } else if (!nips.includes(nip)) {
        nipInpt.value = "";
        intentosNip++;
        if (intentosNip >= 3) {
            alert("Tu cuenta ha sido Blqueada");
            window.location = "../index.html";
        } else {
            alert("El NIP es Incorrecto al tercer intento se bloquea la cuenta");
        }
    } else {
        // validar si existe el nip para cuenta
        intentosNip = 0;
        window.location = "../seleccionoperacion.html";
    }
}

nipInpt.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        ingresaNip();
    }
});

function regresar() {
    window.location = "../index.html";
}