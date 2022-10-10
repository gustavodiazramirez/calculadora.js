var operandoa;
var operandob;
var operacion;

function init(){

    // variables

    var resultado = document.getElementById("resultado");

    var current = document.getElementById("current");
    var sumar = document.getElementById("sumar");
    var restar = document.getElementById("restar");
    var multiplicar = document.getElementById("multiplicar");
    var dividir = document.getElementById("dividir");

    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");

    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");

    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");

    var cero = document.getElementById("cero");
    var punto = document.getElementById("punto");
    var reset = document.getElementById("reset");

    var esigual = document.getElementById("esigual");

    cero.onclick = function(e){
        resultado.textContent =resultado.textContent + "0";
    }

    uno.onclick = function(e){
        resultado.textContent =resultado.textContent + "1";
    }

    dos.onclick = function(e){
        resultado.textContent =resultado.textContent + "2";
    }

    tres.onclick = function(e){
        resultado.textContent =resultado.textContent + "3";
    }

    cuatro.onclick = function(e){
        resultado.textContent =resultado.textContent + "4";
    }

    cinco.onclick = function(e){
        resultado.textContent =resultado.textContent + "5";
    }

    seis.onclick = function(e){
        resultado.textContent =resultado.textContent + "6";
    }

    siete.onclick = function(e){
        resultado.textContent =resultado.textContent + "7";
    }

    ocho.onclick = function(e){
        resultado.textContent =resultado.textContent + "8";
    }

    nueve.onclick = function(e){
        resultado.textContent =resultado.textContent + "9";
    }

    reset.onclick = function(e){
        resetear();
    }

    sumar.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }

    restar.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }

    dividir.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    multiplicar.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }

    esigual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }
}

function limpiar(){
    resultado.textContent = "";

}

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
        
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}
