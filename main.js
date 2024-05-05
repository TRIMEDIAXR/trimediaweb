const pantalla = document.getElementById("pantalla").style.display = "none";
const pantallaclass = document.getElementById("pantalla").style.flexDirection = "column";
const pantallaAlign = document.getElementById("pantalla").style.alignContent = "center";
const img1 = document.getElementById("animado1").style.display = "none";
const img2 = document.getElementById("animado2").style.display = "none";
const img3 = document.getElementById("animado3").style.display = "none";

function mostrarPantalla(boton){
    const pantalla = document.getElementById("pantalla").style.display = "flex";
    switch (boton.id) {
        case "vr":
            const textVR= document.getElementById("info").innerHTML="Diseño de videojuegos para Web, Realidad Virtual (VR), Realidad Aumentada (AR)."
            const imgVR= document.getElementById("animado1").style.display="flex";
            const img2 = document.getElementById("animado2").style.display = "none";
            const img3 = document.getElementById("animado3").style.display = "none";
            break;
        case "hsi":
            const textHSI= document.getElementById("info").innerHTML="Desarrollo de software y hardware para experiencias interactivas."
            const imghsi= document.getElementById("animado1").style.display="none";
            const img = document.getElementById("animado2").style.display = "flex";
            const imgd = document.getElementById("animado3").style.display = "none";
        break;
        case "btl":
            const textBTL= document.getElementById("info").innerHTML="Videojuegos para educación, capacitaciones, publicitarios y marcas (BTL)."
            const imgVRw= document.getElementById("animado1").style.display="none";
            const img2d = document.getElementById("animado2").style.display = "none";
            const img3s = document.getElementById("animado3").style.display = "flex";
            break;
    }
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