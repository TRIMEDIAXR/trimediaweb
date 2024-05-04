const pantallaHSI= document.getElementById("pantallaHSI").style.display="none";
const pantallaVR= document.getElementById("pantallaVR").style.display="none";
const pantallaBTL= document.getElementById("pantallaBTL").style.display="none";

function mostrarHSI(){
    const pantallaHSI= document.getElementById("pantallaHSI").style.display="flex";
    const pantallaVR= document.getElementById("pantallaVR").style.display="none";
const pantallaBTL= document.getElementById("pantallaBTL").style.display="none";
}
function mostrarVR(){
    const pantallaContacto= document.getElementById("pantallaVR").style.display="flex";
    const pantallaHSI= document.getElementById("pantallaHSI").style.display="none";
    const pantallaBTL= document.getElementById("pantallaBTL").style.display="none";
}
function mostrarBTL(){
    const pantallaContacto= document.getElementById("pantallaBTL").style.display="flex";
    const pantallaHSI= document.getElementById("pantallaHSI").style.display="none";
const pantallaVR= document.getElementById("pantallaVR").style.display="none";
}