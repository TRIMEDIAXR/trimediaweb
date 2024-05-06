const pantalla = document.getElementById("pantalla").style.display = "none";
const form = document.getElementById("formulario").style.display = "none";
const pantallaclass = document.getElementById("pantalla").style.flexDirection = "column";
const pantallaAlign = document.getElementById("pantalla").style.alignContent = "center";
const formclass = document.getElementById("formulario").style.flexDirection = "column";
const formAlign = document.getElementById("formulario").style.alignContent = "center";
const img1 = document.getElementById("animado1").style.display = "none";
const img2 = document.getElementById("animado2").style.display = "none";
const img3 = document.getElementById("animado3").style.display = "none";

let auxiliar1= 0;
let auxiliar2= 0;
let auxiliar3= 0;
function mostrarPantalla(boton) {
    const pantalla = document.getElementById("pantalla").style.display = "flex";
    switch (boton.id) {
        case "hsi":
            if(auxiliar1==0){
            const textHSI = document.getElementById("info").innerHTML = "Desarrollo de software y hardware para experiencias interactivas."
            const imghsi = document.getElementById("animado1").style.display = "none";
            const img = document.getElementById("animado2").style.display = "flex";
            const imgd = document.getElementById("animado3").style.display = "none";
            const mostrarForm = document.getElementById("formulario").style.display = "none";
            auxiliar1=1;
            auxiliar2=0;
            auxiliar3=0;
            }
            else{
                auxiliar1=0;
                const img = document.getElementById("pantalla").style.display = "none";
            }

            break;
        case "vr":
            if(auxiliar2==0){
            const textVR = document.getElementById("info").innerHTML = "Diseño de videojuegos para Web, Realidad Virtual (VR), Realidad Aumentada (AR)."
            const imgVR = document.getElementById("animado1").style.display = "flex";
            const img2 = document.getElementById("animado2").style.display = "none";
            const img3 = document.getElementById("animado3").style.display = "none";
            const mostrarForm = document.getElementById("formulario").style.display = "none";
            auxiliar2=1;
            auxiliar1=0;
            auxiliar3=0;
            }
            else{
                auxiliar2=0;
                const img = document.getElementById("pantalla").style.display = "none";
            }
            
            break;
        case "btl":
            if(auxiliar3==0){
            const textBTL = document.getElementById("info").innerHTML = "Videojuegos para educación, capacitaciones, publicitarios y marcas (BTL)."
            const imgVRw = document.getElementById("animado1").style.display = "none";
            const img2d = document.getElementById("animado2").style.display = "none";
            const img3s = document.getElementById("animado3").style.display = "flex";
            const mostrarForm = document.getElementById("formulario").style.display = "none";
            auxiliar3=1;
            auxiliar2=0;
            auxiliar1=0;
            }
            else{
                auxiliar3=0;
                const img = document.getElementById("pantalla").style.display = "none";
            }
            break;
    }
    sonidoTap()
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
    var tap = new Audio("audio/fxTap.mp3");
    tap.play();
}

window.onload = function () {

    document.onclick = function (e) {
        if (e.target.id !== "vr" && e.target.id !== "hsi" && e.target.id !== "btl" && e.target.id !== "informacion") {
            //element clicked wasn't the div; hide the div
            const divToHide = document.getElementById("pantalla").style.display = "none";
            const mostrarForm = document.getElementById("formulario").style.display = "none";
            auxiliar1=0;
            auxiliar2=0;
            auxiliar3=0;
        }
    };
}; 

function mostrarFormulario(){
    const esconder = document.getElementById("pantalla").style.display = "none";
    const mostrarForm = document.getElementById("formulario").style.display = "flex";
    auxiliar1=0;
    auxiliar2=0;
    auxiliar3=0;

}