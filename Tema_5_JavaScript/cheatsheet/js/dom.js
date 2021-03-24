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

const grandParent = document.getElementById("grandparent")
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

parent1.style.backgroundColor = "#333";

body.style.backgroundColor = "#777";

//Todo lo que modifiquemos en estilos del css en JS
// se sobreescribe ya que el JS predomina sobre todo lo demas.










//Array.from(family).forEach(item => console.log(item)); // Construyo un array desde cero
//for (let familyMember of family) {
    //console.log(familyMember);

//}