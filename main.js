
const pantalla = document.getElementById("pantalla").style.display = "none";
let auxiliar=0;


function mostrarContacto() {
    const pantalla = document.getElementById("pantalla").style.display = "flex";
    const idContacto = document.getElementById("idContacto").style.display = "flex";
    const idVR = document.getElementById("idVR").style.display = "none";
    const idServicios = document.getElementById("idPrensa").style.display = "none";
    sonidoTap()
}

function mostrarExperiencia() {
    const pantalla = document.getElementById("pantalla").style.display = "flex";
    const idContacto = document.getElementById("idContacto").style.display = "none";
    const idVR = document.getElementById("idVR").style.display = "flex";
    const idServicios = document.getElementById("idPrensa").style.display = "none";
    sonidoTap()
}

function mostrarPrensa() {
    const pantalla = document.getElementById("pantalla").style.display = "flex";
    const idContacto = document.getElementById("idContacto").style.display = "none";
    const idVR = document.getElementById("idVR").style.display = "none";
    const idServicios = document.getElementById("idPrensa").style.display = "flex";
    sonidoTap()
}

function sonidoUI(boton){
    if(boton.id == "izq"){
        var izq = new Audio("audio/uiOne.ogg");
    izq.play();
    }
    else{
        var der = new Audio("audio/uiThree.ogg");
    der.play();
    }
}


function sonidoTap() {
    var tap = new Audio("audio/uiTwo.ogg");
    tap.play();
}

function sonidoBTN(){
    var slide = new Audio("audio/uiFour.ogg");
    slide.play();
}

window.onload = function () {

    document.onclick = function (e) {
        if (e.target.id == "pantalla" || e.target.id == "tarjeta" || e.target.id == "caja" || e.target.id == "caja2") {
            //element clicked wasn't the div; hide the div
            const divToHide = document.getElementById("pantalla").style.display = "none";
        }
    };
};

function cerrarPantalla(){
    const cerrar = document.getElementById("pantalla").style.display = "none";
}


