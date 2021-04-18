const URL = "https://jsonplaceholder.typicode.com/users";

//let promise = fetch(URL);

function printName(array) {

    array.forEach(user => console.log(user.address.geo.lat));
    
    for (const property in array) {
        console.log(`${property}: ${array[property]}`);
    }
    
};


// metodo then se aplica sobre 1 promesa, el codigo se ejecutara
// cuando la promesa este resuelto.


fetch(URL)
.then(response => response.json())
.then(data => printName(data));

console.clear();

// funciones 
const printNames = array => array.forEach(user => console.log(user.name));
const printCities = array => array.forEach(user => console.log(user.address.city));
const printLats = array => array.forEach(user => console.log(user.address.geo.lat));

fetch(URL)
.then( response => {
    if (response.ok) {
        return response.json();
    }
    throw Error("Hay algun problema con la respuesta: " + response.statusText);
})
.then(data => {
    printNames(data);
    printCities(data);
    printLats(data);
})

.catch(error => console.log(error));

//console.clear();

// Async / Await - Alternativa a then.

// async function requestURL(URL) {
//     console.log(1.1);
//     const response = await fetch(URL);
//     const data = await response.json();
//     //console.log(data);
//     console.log(1.2);
// }
// console.log(1);
// requestURL(URL);
// console.log(2);


// Peticion con metodo HTTP POST en lugar de GET

// const POST_URL = "https://jsonplaceholder.typicode.com/posts";

// const newPost = {
//     title: "mi titulo", 
//     body : "mi cuerpo de publicacion"
// }


// const http = {
//     method: "POST", 
//     headers: {
//         "Content-type" : "application/json"
//     },

//     body: JSON.stringify(newPost)
// };


// para acceder al headers de http , se accede por corchetes 
// seria : headers["content-type"], a su vez dentro de los corchetes 
// se accede con comillas "".

// fetch(POST_URL, http)
//     .then(response => response.json())
//     .then(data => console.log(data));