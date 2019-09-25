function imgChange(logo) {
    document.getElementById('olhosPiscando').src = (logo);
}
function playAudio(audio) {
    document.getElementById(audio).play();
}

function pauseAudio(audio) {
    var controle = document.getElementById(audio);
    controle.pause();
    controle.currentTime = 0;
}
function validar() {
    var nome = document.getElementById("txtNome").value.trim();
    var senha = document.getElementById("txtSenha").value.trim();

    if (nome == '') {
        alert("Usuario Invalido")
        document.getElementById("txtNome").focus();
    } else if (senha == '') {
        alert("Senha Incorreta")
        document.getElementById("txtSenha").focus();
    }
}