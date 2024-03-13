function desbloquearCandado() {
    let candado = document.getElementById('imagen-candado');
    let container = document.getElementById('container');
    var imagePath = candado.src;
    var imageName = imagePath.substring(imagePath.lastIndexOf('/') + 1);
    if (imageName == "bloquear1.png") {
        showAlert('Navbar bloqueado');
        container.style.position = "fixed";
        candado.src = "./img/bloquear.png";
        setTimeout(function() {
            closeAlert();
        }, 3000);
    } else {
        showAlert('Navbar desbloqueado');
        container.style.position = "absolute";
        candado.src = "./img/bloquear1.png";
        setTimeout(function() {
            closeAlert();
        }, 3000);
    }

}

function showAlert(message) {
    var alertBox = document.getElementById('alert');
    alertBox.querySelector('p').textContent = message;
    alertBox.style.right = '20px';
}

function closeAlert() {
    //falta arreglar lo del time out
    var alertBox = document.getElementById('alert');
    alertBox.style.right = '-200px';
}