let iniciar = document.getElementById("iniciar");
let detener = document.getElementById("detener");

iniciar.addEventListener("click", function(){
    let reloj;
    if(!    reloj){
        let parrafo = document.createElement("p");
        document.getElementById("contenedor").appendChild(parrafo); 
        reloj = setInterval(function(){
            let ahora = new Date;
            ahora.toLocaleDateString();
            parrafo.textContent = ahora.toLocaleTimeString();
        }, 1000);
    }
    detener.addEventListener("click", function(){
        clearInterval(reloj);
        reloj = null;
    });
});