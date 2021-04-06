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

// v2 - Autoría Juan Alberto
//const list = document.querySelector("ul");
//const image = document.querySelector("img")

// Apartado 4 / Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input en un párrafo.
// 4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario

const ap4Paragraph = document.getElementById("parrafoRellenable");

const ap4Input = document.querySelector("input");

const ap4Button = document.querySelectorAll("button")[1];

ap4Button.addEventListener("click", () => {
   
    ap4Paragraph.textContent = ap4Input.value; 
    ap4Input.value = "";

});

//4.2

const ap42Parrafo = document.getElementById("parrafoRellenable2");
const ap42Input = document.querySelectorAll("input")[1];

 


ap42Input.addEventListener("keyup", () => ap42Parrafo.textContent = ap42Input.value);

//Apartado 5

const textarea = document.querySelector("#TextoVálido");
textarea.addEventListener("input", e => {
    
    if (e.target.value.length > 15 ) {
        e.target.style.color = "red";

    } else {

        e.target.style.color = "green";
    }
    // e.target se usa de variable para elemento que seleccionemos con un click.
    //e.target.style.color = e.target.value.length > 15 ? "red" : "green";
});

//Apartado 6

const evenInput = document.querySelector("#evenNumberInput");
evenInput.nextElementSibling.addEventListener("click",() => {

    if (evenInput.value % 2 !== 0 ) {
        evenInput.style.border = "2px solid red";
    } else {
        evenInput.style.border = "";
    }
});

//Apartado 7 

const ul = document.getElementById("listToFill");

for (let i = 1; i <= 10; i++) {
    const newLi = document.createElement("li");
    newLi.textContent = `Elemento ${i}` ;
    ul.appendChild(newLi); // Linea encargada de añadir los nuevos elementos al DOM.
    
}

//Apartado 8

const newTabButton = document.querySelector("#newTab");

const link = document.querySelector("a");

newTabButton.addEventListener("click", () => link.target = "blank");

//Apartado 9

const ap9Paragrahp = document.querySelector("#colorsParagraph");

document.querySelector("#colorsSelect").addEventListener("change", e => {
    
    ap9Paragrahp.style.color = e.target.value;

});

//Apartado 10