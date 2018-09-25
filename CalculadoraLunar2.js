var peso;
var pesoFinal;
var Texto = document.getElementById("Txt_Peso");
var toBeFilled = document.getElementById("toBeFilled"); 
var Boton_Luna_Apretado = document.getElementById("Luna_Boton");
var Boton_Marte_Apretado = document.getElementById("Marte_Boton");
var Boton_Jupiter_Apretado = document.getElementById("Jupiter_Boton");
var resultBox = document.getElementById("resultBox");
var gravedad = 9.81;

Boton_Luna_Apretado.addEventListener ("click", elegirLuna);
Boton_Marte_Apretado.addEventListener ("click", elegirMarte);
Boton_Jupiter_Apretado.addEventListener ("click", elegirJupiter);

function elegirLuna() {
    
    peso = parseInt(Texto.value);
    pesoFinal = (peso / gravedad) * 1.622;
    pesoFinal = pesoFinal.toPrecision(3);  
        
    if (pesoFinal > 0){

        resultBox.style.opacity = "1";
        toBeFilled.innerHTML = "Tu peso en la Luna sería de: " + pesoFinal + "kg";
    } else if (pesoFinal < 0){
        resultBox.style.opacity = "1";
        toBeFilled.innerHTML = "No es posible que tu peso sea " + peso + "kg";
    } else {
        resultBox.style.opacity = "1";
        toBeFilled.innerHTML = "Por favor, ingresá tu peso";
    }
}

function elegirMarte() {
    
    peso = parseInt(Texto.value);
    pesoFinal = (peso / gravedad) * 3.7;
    pesoFinal = pesoFinal.toPrecision(3);
    
    if (pesoFinal > 0) {
        resultBox.style.opacity = "1";
        toBeFilled.innerHTML = "Tu peso en Marte sería de: " + pesoFinal + "kg";
    } else if (pesoFinal < 0) {
        resultBox.style.opacity = "1";

        toBeFilled.innerHTML = "No es posible que tu peso sea " + peso + "kg";
    } else {
        resultBox.style.opacity = "1";
        toBeFilled.innerHTML = "Por favor, ingresá tu peso";
    }
}

function elegirJupiter() {
    peso = parseInt(Texto.value);
    pesoFinal = (peso / gravedad) * 24.8;
    pesoFinal = pesoFinal.toPrecision(3);

    if (pesoFinal > 0) {
        resultBox.style.opacity = "1";
        toBeFilled.innerHTML = "Tu peso en Júpiter sería de: " + pesoFinal + "kg";
    } else if (pesoFinal < 0) {
        resultBox.style.opacity = "1";
        toBeFilled.innerHTML = "No es posible que tu peso sea " + peso + "kg";
    } else {
        resultBox.style.opacity = "1";
        toBeFilled.innerHTML = "Por favor, ingresá tu peso";
    }
}




// Programar cómo pasar de parrafo a parrafo con trancisión si ya tiene texto toBeFilled (fade-out -> fade-in?)