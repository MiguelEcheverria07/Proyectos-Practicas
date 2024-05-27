var directorioImagenes = "../recursos/imagenes/"

function crearNodo(tipoNodo) {
    var nodo = document.createElement(tipoNodo);
    return nodo;
}

function crearNodoConTexto(tipoNodo, textoNodo) {
    var nodo = document.createElement(tipoNodo);
    var textoNodo = document.createTextNode(textoNodo);
    nodo.appendChild(textoNodo);
    return nodo;
}

function crearNodoImagen(nombreImagen, alt, width) {
    var nodo = crearNodo("img");
    nodo.src = directorioImagenes + nombreImagen;
    nodo.alt = alt;
    nodo.style.width = width;
    return nodo;
}

function crearNodoImagenURL(url, alt, width) {
    var nodo = crearNodo("img");
    nodo.src = url;
    nodo.alt = alt;
    nodo.style.width = width;
    return nodo;
}

function crearNodoLista(tipoNodo, textoNodo) {
    var nodo = crearNodo(tipoNodo);
    var textoNodo = document.createTextNode(textoNodo);
    nodo.appendChild(textoNodo);
    return nodo;
}

function borrarFilasTablas(tabla){
    var totalFilas = tabla.rows.length;
    for (let i = 1; i < totalFilas; i++) {  
        totalFilas.deleteRow(i)
    }
}

function adicionarNodoABody(nodo) {
    document.body.appendChild(nodo);
}

function adicionarNodoAContenedor(nodo, contenedor) {
    contenedor.appendChild(nodo);
}