//DOM
//nombre del boton ; boton
let boton = document.getElementById("boton");
let componenteDatos = document.getElementById("datos");
boton.innerText = "saludame";
boton.addEventListener("click", function () {
  alert("te manda saludos mitel bi");
});
async function getData(url, elemento) {
  try {
    let response = await fetch(url);
    let datos = await response.json();
    elemento.innerHTML = JSON.stringify(datos);
  } catch (error) {
    console.log(error);
  }
}
getData("https://whenisthenextmcufilm.com/api", componenteDatos);

/*
async function fetching(url) {
  try {
    let response = await fetch(url);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
let data = fetching("https://fakestoreapi.com/products");
console.log(data);
//funciones
function miMetodo(numero1, numero2) {
  let suma = parseInt(numero1) + parseInt(numero2);
  return suma;
}
let respuesta = miMetodo(1, 1);
console.log(respuesta);
estructura de validacion con if
if (parseInt(edad) >= 100) {
  alert("estas mas cerca de la tumba que de tu casa");
} else if (parseInt(edad) >= 18) {
  alert("eres mayor de edad podes beber guaro");
} else {
  alert("chamaco pendejo");
}
//objetos
let misDatos = {
  nombre: "juan",
  edad: 18,
  sexo: "M",
};

//array
let miArray = [
  
];

switch (edad) {
  case "W":
    alert("adelante");
    break;
  case "A":
    alert("izquierda");
    break;
  case "D":
    alert("derecha");
    break;
  case "S":
    alert("atras");
    break;
  default:
    alert("no se que decirte");
    break;
}

ternaria 
let like = true;
alert(like ? "ya le dio like" : "aun no le gusta");

if (like) {
  alert("ya le dio like");
} else {
  alert("aun lo le gusta");
}
alert(respuesta);
*/
