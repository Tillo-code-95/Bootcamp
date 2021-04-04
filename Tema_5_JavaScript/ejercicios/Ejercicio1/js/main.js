//Apartado 1 - Partimos de un hmtl con un divg vacio.
// Con JS, añadir dos elementos p con un texto dentro.

const div = document.getElementsByClassName("div")[0];
console.log(div);

const p = document.createElement("p");


document.createElement("p");
p.textContent = "Hola desde un javascript 1";


div.appendChild(p);


const p2 = document.createElement("p");
p2.textContent = "Adios desde un javascript 2"

div.appendChild(p2)

//Apartado 2.
const colorButton = document.getElementsByTagName("button")[0];

colorButton.addEventListener("click", function (){

    document.body.style.backgroundColor = "red";
});

//Apartado 3 / Partimos de un HTML 
//con una lista de 3 URLs(texto) de imágenes y un element img. 
//Al hacer click en cada URL, cambiará la imagen a la que contenga dicha URL.

const listItems = document.getElementsByTagName("li");
const image = document.querySelector("img");

const changeImage = (e) => image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);

// Apartado 4 / Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input en un párrafo.
// 4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario

const input = document.getElementsByTagName("input");
console.log(input);