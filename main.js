const pantallaHSI = document.getElementById("pantallaHSI").style.display = "none";
const pantallaVR = document.getElementById("pantallaVR").style.display = "none";
const pantallaBTL = document.getElementById("pantallaBTL").style.display = "none";

function mostrarHSI() {
    const pantallaHSI = document.getElementById("pantallaHSI").style.display = "flex";
    const pantallaclassHSI = document.getElementById("pantallaHSI").style.flexDirection = "column";
    const pantallajHSI = document.getElementById("pantallaHSI").style.alignContent = "center";
    const pantallaVR = document.getElementById("pantallaVR").style.display = "none";
    const pantallaBTL = document.getElementById("pantallaBTL").style.display = "none";
    sonidoTap()
}
function mostrarVR() {
    const pantallaVR = document.getElementById("pantallaVR").style.display = "flex";
    const pantallaclassVR = document.getElementById("pantallaVR").style.flexDirection = "column";
    const pantallajVR = document.getElementById("pantallaVR").style.alignContent = "center";
    const pantallaHSI = document.getElementById("pantallaHSI").style.display = "none";
    const pantallaBTL = document.getElementById("pantallaBTL").style.display = "none";
    sonidoTap()
}
function mostrarBTL() {
    const pantallaBTL = document.getElementById("pantallaBTL").style.display = "flex";
    const pantallaclaSBTL = document.getElementById("pantallaBTL").style.flexDirection = "column";
    const pantallajBTL = document.getElementById("pantallaBTL").style.alignContent = "center";
    const pantallaHSI = document.getElementById("pantallaHSI").style.display = "none";
    const pantallaVR = document.getElementById("pantallaVR").style.display = "none";
    sonidoTap()
}

var type= new Typed('#txtAnimado',{
    strings:[
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

function sonidoTap(){
    var tap= new Audio("audio/fxTap.mp3");
    tap.play();
  }