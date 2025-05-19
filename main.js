//En js tenemos las funciones de tipo flecha
//Utilizando fetch que es un metodo para consumir una API

//Paso 1 : Funcion Flecha 
const consumirApi = ()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    //convertimos la respuesta a tipo JSON
    .then((response) => response.json())
    //Los datos los vamos a mandar a la consola 
    .then((data) => {
//La data de la api la vamos a llevar al HTML
//Paso 1.- Definirmos las constantes que vamos a usar el HTML que bamos a afcetar
const nombre = document.getElementById("nombre");
const nombreUsuario = document.getElementById("nombreUsuario");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const website = document.getElementById("website");

nombre.innerText = data[1].name;
nombreUsuario.innerText = data[1].username;
email.innerText = data[1].email;
phone.innerText = data[1].phone;
website.innerText = data[1].website;
})  
    //descubrir que hacer en caso de que no me corresponda 
    .catch((error) => console.log(error));

//El DOM - Document object Model
// Semana 2: Apartir de esta sesion, vamos a identificar a los elementos del HTML con un "id"

//Creo una constante y le paso como valor el id del H1 que esta en la linea 17 en mi HTML
//con getElementById
const titulo = document.getElementById("tituloEncabezado") ;

//Imprimo la varible titulo pero con el atributo tectContent
console.log(titulo.textContent);

};

consumirApi();
