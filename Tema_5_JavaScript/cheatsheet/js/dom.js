//-------------------- 2º Parte------------------

//-------DOM (document object model)-----------

console.log(document);
console.log(document.domain);
console.log(document.URL);
//document.tittle = "Cheatsheet JavaScrip , (DOM)"
document.title += " (DOM)  ";
console.log(document.title);
console.log(document.lastModified);


//--------Selectors/Selectores

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
parent2.appendChild(myDiv); // anexar elemento dentro de otro
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



// ------------Eventos------------

// Al seleccionar ("button") nos devuelve html collection y se le añade[0],
// para que seleccione el elementeo button dentro de ese html colection.


const colorButton = document.getElementsByTagName("button")[0];

//
colorButton.addEventListener("click", function (event){
    //console.log(event);
    //console.log(event.target);
    //document.body.style.backgroundColor = 
    // document.body.classList.toggle("bg-red");
    //console.log(event.target.tagName);

    if (event.ctrlKey) {
        document.body.classList.toggle("bg-red");
    }
    console.log(`X : ${event.clientX} | Y: ${event.clientY}`);
    console.log(`Alt: ${event.altKey}. Shift: ${event.shiftKey}. Ctrl: ${event.ctrlKey}`);
});

const emailInput = document.querySelector("#emailInput");

emailInput.addEventListener("focus", inputListener);
emailInput.addEventListener("blur", inputListener);


function inputListener (e) {
    //console.log(e.target);
    console.log("Tipo de evento: ", e.type);

    // if (e.type === "focus") {
    //     e.target.classList.add("bg-red");

    // } else if (e.type === "blur") {
    //     e.target.classList.remove("bg-red");
    // }
    
}

const changeTitle = e => {

    document.querySelectorAll("h1")[2].textContent = emailInput.value;
}

emailInput.addEventListener("keydown", inputListener);
emailInput.addEventListener("keyup", changeTitle);

const container = document.getElementById("container");

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout",inputListener);

//--------------Coords-----------

function coords (e) {
   const h1 = document.querySelectorAll("h1")[3];
   h1.textContent = `X: ${e.clientX} | Y: ${e.clientY}`;
}

document.body.addEventListener("mousemove" , coords);





//Todo lo que modifiquemos en estilos del css en JS
// se sobreescribe ya que el JS predomina sobre todo lo demas.










//Array.from(family).forEach(item => console.log(item)); // Construyo un array desde cero
//for (let familyMember of family) {
    //console.log(familyMember);

//}