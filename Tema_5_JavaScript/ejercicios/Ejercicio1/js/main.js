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



 
