var directorioImagenes = "../recursos/imagenes/"

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

function crearNodoImagen(nombreImagen, alt) {
    var nodo = crearNodo("img");
    nodo.src = directorioImagenes + nombreImagen;
    nodo.alt = alt;
    document.body.appendChild(nodo);
}


