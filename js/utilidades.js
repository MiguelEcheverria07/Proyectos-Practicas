var directorioImagenes = "../recursos/imagenes/"
var ejecutarFuncion = false;

function crearNodo(tipoNodo) {
    var nodo = document.createElement(tipoNodo);
    return nodo;
}

function crearNodoConTexto(tipoNodo, textoNodo) {
    var nodo = document.createElement(tipoNodo);
    var textoNodo = document.createTextNode(textoNodo);
    nodo.appendChild(textoNodo);
    document.body.appendChild(nodo);
}

function crearNodoImagen(nombreImagen, alt, width) {
    var nodo = crearNodo("img");
    nodo.src = directorioImagenes + nombreImagen;
    nodo.alt = alt;
    nodo.style.width = width;
    document.body.appendChild(nodo);
}

function crearUI() {
    if(!ejecutarFuncion){
    crearNodoConTexto('h1','Ejemplo JS');
    crearNodoConTexto("p", "Este es un ejemplo de javascript");
    crearNodoImagen("cielo.png","Cielo PNG", "500px");
    ejecutarFuncion = true;
    }else{
      alert("Relajate, ya presionaste una vez")
    }
}
