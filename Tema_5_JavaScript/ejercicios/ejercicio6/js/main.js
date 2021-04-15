//Hacer una peticion a la API de "https://jsonplaceholder.typicode.com/users";
//Con el array que nos llegue , iremos rellenando nuestra ul con <li> con los
//primeros 20 elementos.

const URL = "https://jsonplaceholder.typicode.com/comments";
const list = document.querySelector("#myList");

function fillList(array) {
    array.slice(0 , 20).forEach(element => {
        list.innerHTML += `<li>${element.name}</li>`;
    });
}




const URL1 = "https://jsonplaceholder.typicode.com/posts";

const div = document.querySelector("#title");

function addTitle(array) {
    array.slice(0 , 10).forEach(element => {
        list.innerHTML += `<h2>${element.title}</h2> <p>${element.body}</p> <p>${element.id} </p>`
    });
}


// crear una funcion que reciba un array un numero y un tamaño de paginas y apartir
// de esa funcion que te devuelva lo que pides.






fetch(URL)
.then( response => {
    if (response.ok) {
        return response.json();
    }
    throw Error("Hay algun problema con la respuesta: " + response.statusText);
})
.then(data => {
   fillList(data);
})

.catch(error => console.log(error));


fetch(URL1)
.then( response => {
    if (response.ok) {
        return response.json();
    }
    throw Error("Hay algun problema con la respuesta: " + response.statusText);
})
.then(data => {
   addTitle(data);
})

.catch(error => console.log(error));