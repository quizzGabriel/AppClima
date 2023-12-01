var ciudadeshtml = document.querySelector("#ciudades");
var paiseshtml = document.querySelector("#Paises");
var boton = document.getElementById("GetWeathe");
var imprimeresultado =;

// console.log(ciudadeshtml.value);

boton.addEventListener("click", imprime);

function imprime() {
    // return console.log(ciudadeshtml.value, paiseshtml.value);
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + ciudadeshtml.value +"&appid=c4222a37c2c8bbdbdd640fb3d2e1293e")
  // Espera la promesa y obtén la respuesta
  .then(function(respuesta) {
    // Convierte la respuesta en un objeto JSON
    return respuesta.json();
  })
  // Espera la promesa y obtén los datos
  .then(function(datos) {
    // Muestra algunos datos de los datos
    console.log("Temperatura: " + datos.main.temp + " K");
    console.log("Humedad: " + datos.main.humidity + " %");
    console.log("Descripción: " + datos.weather[0].description);
  })
  // Captura cualquier error que ocurra
  .catch(function(error) {
    console.error(error);
  });
}

function imprimeValores(){

}

