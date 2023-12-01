var ciudadeshtml = document.querySelector("#ciudades");
var paiseshtml = document.querySelector("#Paises");
var boton = document.getElementById("GetWeathe");
var imprimeresultado =document.getElementById("resultado");

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
    var tem = parseInt(datos.main.temp);
    tem = tem - 273.15;  
    console.log("Temperatura: " + tem + " C");
    console.log("Humedad: " + datos.main.humidity + " %");
    console.log("Descripción: " + datos.weather[0].description);
    imprimeresultado.innerHTML = `<div class="row text-white">
                                  <h6>Clima en ${ciudadeshtml.value}</h6> 
  
                                 </div>
                                <div class="row text-center text-white">
                                <i class="bi bi-cloud-fill" style="font-size: 3em;"></i>
                                  </div>
                                <div class="row text-white">
                                <h1>Temperatura: ${tem} C</h1>
                                </div>
                                <div class="row text-white">Humedad:${datos.main.humidity} %</div>
                                <div class="row text-white">12.27°C</div>`;
  })
  // Captura cualquier error que ocurra
  .catch(function(error) {
    console.error(error);
  });

}