const pantallaHSI = document.getElementById("pantallaHSI").style.display = "none";
const pantallaVR = document.getElementById("pantallaVR").style.display = "none";
const pantallaBTL = document.getElementById("pantallaBTL").style.display = "none";

function mostrarHSI() {
    const pantallaHSI = document.getElementById("pantallaHSI").style.display = "flex";
    const pantallaclassHSI = document.getElementById("pantallaHSI").style.flexDirection = "column";
    const pantallajHSI = document.getElementById("pantallaHSI").style.alignContent = "center";
    const pantallaVR = document.getElementById("pantallaVR").style.display = "none";
    const pantallaBTL = document.getElementById("pantallaBTL").style.display = "none";
}
function mostrarVR() {
    const pantallaVR = document.getElementById("pantallaVR").style.display = "flex";
    const pantallaclassVR = document.getElementById("pantallaVR").style.flexDirection = "column";
    const pantallajVR = document.getElementById("pantallaVR").style.alignContent = "center";
    const pantallaHSI = document.getElementById("pantallaHSI").style.display = "none";
    const pantallaBTL = document.getElementById("pantallaBTL").style.display = "none";
}
function mostrarBTL() {
    const pantallaBTL = document.getElementById("pantallaBTL").style.display = "flex";
    const pantallaclaSBTL = document.getElementById("pantallaBTL").style.flexDirection = "column";
    const pantallajBTL = document.getElementById("pantallaBTL").style.alignContent = "center";
    const pantallaHSI = document.getElementById("pantallaHSI").style.display = "none";
    const pantallaVR = document.getElementById("pantallaVR").style.display = "none";
}