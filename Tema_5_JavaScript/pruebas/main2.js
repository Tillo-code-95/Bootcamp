// Apartado 1 - Partimos de un hmtl con un div vacio.
// Con JS, añadir dos elementos p con un texto dentro.

// const contenedor = document.querySelector("div");
// const parrafo = document.createElement("p");

// const text = parrafo.innerHTML= "Hola mundo";
// contenedor.appendChild(parrafo);
// console.log(parrafo);

// const parrafo2 = document.createElement("p");
// const text2 = parrafo2.innerHTML= "Adios mundo";
// contenedor.appendChild(parrafo2);
// console.log(parrafo2);

// const button = document.createElement("button");
// const text3 = button.innerHTML = "www.google.com";
// contenedor.appendChild(button);
// console.log(button);


// //Apartado 2 // Añadir un boton que cambie el fondo del html.

// const button1 = document.getElementsByClassName("boton")[0];

// button1.addEventListener("click", function (){

//     document.body.style.backgroundColor = "red";
// });

// const button2 = document.getElementById("boton1");

// button2.addEventListener("click", function(){

//     document.body.style.backgroundColor = "green";
// });

// // //Apartado 3 / Partimos de un HTML 
// // //con una lista de 3 URLs(texto) de imágenes y un element img. 
// // //Al hacer click en cada URL, cambiará la imagen a la que contenga dicha URL.

// const lista = document.querySelector("ul");

// const imagen = document.querySelector("img");

//  //const changeImage = (e) => imagen.src = e.target.textContent;

//  function changeImage (e) {
//     imagen.src = e.target.textContent
// }

// lista.addEventListener("click", changeImage);


// lista.addEventListener("click", function(e){
//     imagen.src = e.target.textContent;
// });

// //  lista[0].addEventListener("click", changeImage);
// //  lista[1].addEventListener("click", changeImage);
// //  lista[2].addEventListener("click", changeImage);


// // //Apartado 4/ Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input en un párrafo.
// // // 4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario

// const p1 = document.getElementById("paragraph1");
// const input = document.getElementById("input");
// const b2 = document.getElementById("boton2");

// b2.addEventListener("click", function(){
//     p1.textContent = input.value;
// });

// // // 4.2

// const p2 = document.getElementById("paragraph2");
// const input2 = document.getElementById("input2");

// input2.addEventListener("input", function(){
//     p2.textContent = input2.value;
// });

// // // 5 / De forma similar al anterior, pero para un textareay validará si lo introducido es mayor de 15 caracteres

// const area = document.getElementById("textarea");

// area.addEventListener("input", function (e) {

// if (e.target.value.length > 15){

//     e.target.style.color = "red";
// } else {
//     e.target.style.color = "green";
// }

// });

// // 6 Añadir un input de tipo texto con leyenda: “Escribir un número par”. Añadir un botón. Al pulsar el botón
// //nos validará si el número es par o no. En caso negativo, cambiar los bordes del input a rojo.
// //Para revertir el estado de una propiedad, podemos utilizar el valor “revert” o dejarla vacío.


// const input6 = document.querySelector("#numberInput");
// //const button6 = document.querySelector("button");

// input6.nextElementSibling.addEventListener("click", () => {
//     if(input6.value % 2 !== 0) {
//         input6.style.border = "2px solid red";
//     } else {
//         input6.style.border = ""
//     }
// });

// // 7 / Partiendo de una lista ul, crear
// //10 li con un texto indicando el número del elemento (“Elemento X”) 
// //usando un bucle for.

// const ul7 = document.getElementById("Element7");

// for(let i = 1; i <= 10; i++) {
//     const li7 = document.createElement("li");
//     li7.textContent = `Elemento ${i}`;
//     ul7.appendChild(li7);
// }

// // 8 / Crear un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página. Si pulso primero el botón y luego el enlace, se me abre en una nueva pestaña.

// const tab8 = document.querySelector("#tabNew");

// const link8 = document.querySelector("a");

// tab8.addEventListener("click", () => link8.target = "blank");

// // 9 / Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, rojo, amarillo, verde y azul. Al seleccionar un color del select, cambiar el color del párrafo.

// // const paragraph9 = document.querySelector("#paragraphColor");

// // document.querySelector("#colorSelect").addEventListener("change", e => {
// //     paragraph9.style.color = e.target.value;
// // });

// const paragraph9 = document.querySelector("#paragraphColor");
// const select9 = document.querySelector("#colorSelect")

// select9.addEventListener("change", e => {
//     paragraph9.style.color = e.target.value;
// });

// 10 - Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista 
//actualiza el número de elementos que se han generado, los que son pares y los que son impares.





// -----------------------------Ejercicio 2 /

function User(name, firstLastName, secondLastName, email, age , city , productsCount ){

    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this. email = email;
    this.age = age;
    this.city = city;
    this.productsCount = productsCount;
    this.incrementProduct = function () {
        this.productsCount ++
    }
    this.emptyProducts = function () {
        this.productsCount = 0
    };
}; 

const users = [
    new User("Victor", "Perez", "Corpas", "tillorr10@gmail.com", 25, "Malaga", 0),
    new User("Victor", "Perez", "Corpas", "tillorr10@gmail.com", 25, "Malaga", 0),

]










