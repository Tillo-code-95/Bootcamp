//-------------------- 2º Parte------------------

//-------DOM (document object model)-----------

console.log(document);
console.log(document.domain);
console.log(document.URL);
//document.tittle = "Cheatsheet JavaScrip , (DOM)"
document.title += " (DOM)  ";
console.log(document.title);
console.log(document.lastModified);


//--------Selectors

const family = document.getElementsByTagName("div");
console.log(family);

const grandParent = document.getElementById("grandparent");
console.log(grandParent);

const parents = document.getElementsByClassName("parent");
//Seria igual a escribir.

const parent1 = parents[0];
const parent2 = parents[1];

console.log(parent1 , parent2);

const children = document.getElementsByClassName("child");
console.log(children);

let element = document.querySelector(".grandparent div");
console.log(element);

const changeBackground = (element, color) => element.style.backgroundColor = color;

// changeBackground(children[0], "#333");

// changeBackground(parent1, "black");

// changeBackground(parent2.children[1], "blue");

// changeBackground(parent1.children[1].previousElementSibling, "blue")

// changeBackground.grandParent.children[1].previousElementSibling.lastElementChild , "green";

// parent1.style.backgroundColor = "#333";

// body.style.backgroundColor = "#777";

// children[0].parentNode.style.backgroundColor = "#777"

//---------Properties
//children[0].innerHTML = "Child 1 v2"
console.log(children[0].innerHTML);
console.log(children[0].textContent); // Ignora etiquetas HTML

console.clear();

console.log("Classlist: ", parent1.classList);
parent1.classList.remove("bg-dark");
console.log("Classlist: " , parent1.classList);
parent1.classList.add("bg-red")
console.log("Classlist: ", parent1.classList);

parent1.classList.toggle("bg-red"); 
// toggle : Alterna la clase, si no esta , la incluye , si esta la elimina.

parent1.setAttribute("name", "nombre-parent-1")

console.clear();

// Create / Remove elements

let myDiv = document.createElement("div");
myDiv.id = "new-Div"; // añade nuevo id
myDiv.classList.add("child");// añade nueva clase
myDiv.textContent = "child 2.5"; // añade nuevo texto

let myDiv2 = myDiv;
parent2.appendChild(myDiv);
parent1.appendChild(myDiv); // MISMO nodo con 2 nombres diferentes


myDiv2 = myDiv.cloneNode(true); // Creamos un nuevo nodo a partir del original.
parent2.appendChild(myDiv2);

myDiv2.textContent = "Child 5";

myDiv.remove(); // Elimina el bloque creado.


let myDiv3 = myDiv.cloneNode(false);// Con true hace una copia de todo lo que hay dentro del contenedor.
parent2.before(myDiv3); // Añade el bloque ya creado antes del "parent2"
parent2.after(myDiv.cloneNode());

// Ejercicio. Crear una funcion que me devuelva un nodo nuevo y que reciba etiqueta e ID

function createNode(label, id) {
    let newNode  = document.createElement(label);
    newNode.id = id;
    
    return newNode;
}

let newDiv = createNode("div", "identificador1")
let table = createNode("table", "identificador2")

parent2.appendChild(newDiv);
parent2.appendChild(table);







//Todo lo que modifiquemos en estilos del css en JS
// se sobreescribe ya que el JS predomina sobre todo lo demas.










//Array.from(family).forEach(item => console.log(item)); // Construyo un array desde cero
//for (let familyMember of family) {
    //console.log(familyMember);

//}