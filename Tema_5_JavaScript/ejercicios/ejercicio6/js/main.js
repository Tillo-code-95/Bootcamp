//Hacer una peticion a la API de "https://jsonplaceholder.typicode.com/users";
//Con el array que nos llegue , iremos rellenando nuestra ul con <li> con los
//primeros 20 elementos.

// const URL = "https://jsonplaceholder.typicode.com/comments";
// const list = document.querySelector("#myList");

// function fillList(array) {
//     array.slice(0 , 20).forEach(element => {
//         list.innerHTML += `<li>${element.name}</li>`;
//     });
// }




// const URL1 = "https://jsonplaceholder.typicode.com/posts";

// const div = document.querySelector("#title");

// function addTitle(array) {
//     array.slice(0 , 10).forEach(element => {
//         list.innerHTML += `<h2>${element.title}</h2> <p>${element.body}</p> <p>${element.id} </p>`
//     });
// }


// crear una funcion que reciba un array un numero y un tamaño de paginas y apartir
// de esa funcion que te devuelva lo que pides.

//6.1 Post - Paginación del lado del cliente
//Constantes
const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

//Variables
let posts = [];
let currentPage = 1;
 

//Selectores
const postDiv =document.querySelector("#posts")
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

 

//Utilidades
function fillDiv(){
    const newPagePosts = paginate(posts, PAGE_SIZE, currentPage);
    postDiv.innerHTML="";
    newPagePosts.forEach(post => postDiv.innerHTML +=`<h3>${post.id} ${post.title}</h3><p>${post.body}</p>`)
}

 

function changePage(event){

 if ( event.target.className === "previousPage" && currentPage > 1 ) {
     currentPage-- ;
    } else if (event.target.className === "nextPage" && currentPage < (posts.length / PAGE_SIZE)){
        currentPage++;
    }

    fillDiv();
}

//posts.length / PAGE_SIZE realizamos esta operacion paraponer limite a la paginacion
//longitud del posts que sabemos que es 100 entre el tamaño de nuestras paginas 
// que sabemos que es 20.
 

//https://stackoverflow.com/questions/42761068/paginate-javascript-array
function paginate(array, page_size, page_number) {

 

    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  
 

 


fetch(POST_URL)
.then(responde => responde.json())
.then(data =>{
    posts = [...data];
    fillDiv();
});










// fetch(URL)
// .then( response => {
//     if (response.ok) {
//         return response.json();
//     }
//     throw Error("Hay algun problema con la respuesta: " + response.statusText);
// })
// .then(data => {
//    fillList(data);
// })

// .catch(error => console.log(error));


// fetch(URL1)
// .then( response => {
//     if (response.ok) {
//         return response.json();
//     }
//     throw Error("Hay algun problema con la respuesta: " + response.statusText);
// })
// .then(data => {
//    addTitle(data);
// })

// .catch(error => console.log(error));