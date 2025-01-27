let teclas = document.getElementsByClassName("tecla");
let number = document.getElementById("number");
let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");
let borrar = document.getElementById("borrar");
let dividir = document.getElementById("dividir");
let realizar = document.getElementById("obtenerResultado");
let multiplicar = document.getElementById("multiplicar");
let operacion = "";
let numeroAnterior = 0;

for(let i = 0; i < teclas.length; i++){
    teclas[i].addEventListener("click", function(){
        number.textContent += teclas[i].textContent;
    });
}

sumar.addEventListener("click", function(){
    operacion = "+";
    numeroAnterior += parseInt(number.textContent);
    number.textContent = "";
});

restar.addEventListener("click", function(){
    operacion = "-";
    numeroAnterior += parseInt(number.textContent);
    number.textContent = "";
});

multiplicar.addEventListener("click", function(){
    operacion = "*";
    numeroAnterior += parseInt(number.textContent);
    number.textContent = "";
});

dividir.addEventListener("click", function(){
    operacion = "/";
    numeroAnterior += parseInt(number.textContent);
    number.textContent = "";
});

borrar.addEventListener("click", function(){
    number.textContent = number.textContent.slice(0, -1);
});

realizar.addEventListener("click", function(){
    let segundoNumero = parseInt(number.textContent);
    number.textContent = "";
    if(operacion === "+")
        number.textContent = numeroAnterior + segundoNumero;
    if(operacion === "-")
        number.textContent = numeroAnterior - segundoNumero;
    if(operacion === "/")
        number.textContent = numeroAnterior / segundoNumero;
    if(operacion === "*")
        number.textContent = numeroAnterior * segundoNumero;
    numeroAnterior = 0;
    segundoNumero = 0;
});

