const pantalla = document.getElementById("pantalla").style.display = "none";
let auxiliar=0;


function mostrarPantalla(boton) {

    const pantalla = document.getElementById("pantalla").style.display = "flex";
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

var type = new Typed('#txtAnimado', {
    strings: [
        '<i class="txtAnimado">EXPERIENCIAS INTERACTIVAS</i>',
        '<i class="txtAnimado">VIDEOJUEGOS PERSONALIZADOS</i>',
        '<i class="txtAnimado">VIDEOJUEGOS PARA EVENTOS</i>',
        '<i class="txtAnimado">VIDEOJUEGOS PUBLICITARIOS</i>',
        '<i class="txtAnimado">VIDEOJUEGOS EDUCATIVOS</i>',
        '<i class="txtAnimado">REALIDAD VIRTUAL</i>',
        '<i class="txtAnimado">REALIDAD AUMENTADA</i>'],

    typeSpeed: 70,
    startDelay: 250,
    backSpeed: 30,
    smartBackspace: true,
    shuffle: true,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '/',
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 50
})

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
