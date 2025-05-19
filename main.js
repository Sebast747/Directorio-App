//En js tenemos las funciones de tipo flecha
//Utilizando fetch que es un metodo para consumir una API

//Paso 1 : Funcion Flecha 
const consumirApi = ()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    //convertimos la respuesta a tipo JSON
    .then((response) => response.json())
    //Los datos los vamos a mandar a la consola 
    .then((data) => console.log(data))
    //descubrir que hacer en caso de que no me corresponda 
    .catch((error) => console.log(error));

};

consumirApi();