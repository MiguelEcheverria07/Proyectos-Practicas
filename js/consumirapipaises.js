function consumirAPIPaises(){
    var url = 'https://restcountries.com/v3.1/independent?status=true';
    fetch(url)
    .then(respuesta =>{
        return respuesta.json();
    })
    .then(paises =>{
        console.log("ejecutando")
        var tablaPaises = document.getElementById('tablaPaises');
        for (const pais of paises) {
            var fila = tablaPaises.insertRow(-1);
            var columnaNombre = fila.insertCell(0);
            var columnaSubregion = fila.insertCell(1);

            columnaNombre.innerHTML = pais.name.common;
            columnaSubregion.innerHTML = pais.capital;

           // console.log("Capital: " + pais.capital[0])
        }
    })

    .catch(error =>{
        console.error("error", error)
    })
}






