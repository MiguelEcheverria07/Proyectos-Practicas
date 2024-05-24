function consumirAPIPaises(){
    var url = 'https://restcountries.com/v3.1/independent?status=true';
    fetch(url)
    .then(respuesta =>{
        return respuesta.json();
    })
    .then(paises =>{
        console.log(paises)
        for (const pais of paises) {
            console.log("Pais: " + pais.name.official )
            console.log("Region: " + pais.region)
            console.log("Oficial: " + pais.name.official)
            console.log("Capital: " + pais.capital[0])
        }
    })

    .catch(error =>{
        console.log(" Error", error);
    })
}

var fila = document.createElement("tr");
var columna = document.createElement("td");






