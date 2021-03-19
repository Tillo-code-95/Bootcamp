// ------------Uso de JS externo-------------
function saludo() {
    alert("Hola desde un script interno");
    console.log("has hecho click");
}
document.getElementsByTagName("a").item(1).addEventListener("click", saludo)

//-------------- Depuracion(encontrar el error) / logging(crear logs)---------------

// alert("mensaje")
console.log("Mensaje");

// ------------Variables-------------
// var-> function scope
// let/const -> block scope

function saludar() {
   
    console.log("Inicial: ", contador);

    //comprobar con var y con let y ver diferencias
    for ( var contador = 0; contador < 3; contador ++){
        console.log(contador);
    }
    console.log("Final: ", contador);
}

saludar()


console.clear();

// -----------Inicializacion-------------
let day;
day = 5;

let monthName = "Octubre";

let hour, minute ,second;

let array = [15, 20, 25];
console.log(array[0], array[1], array[2],);

let [var1, var2, var3,] = [15, 20, 25];
console.log(var1, var2, var3);

//const -> block scope

const x = 1;
// const y; // Error
//x = 2;// Error: has definido x como una constante

console.clear();

//------------Tipos de datos------------------

let str = String("Im another string");
let str2 = "Im another string"; //Recomendada
console.log(typeof str, typeof str2, typeof"");

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2,  typeof(5), typeof 5.3, typeof"5");


// let str ="string" ES IGUAL a "String"

let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log(undef, typeof undef);

let selectedColor = null; //Limpiar una variable
console.log(selectedColor, typeof selectedColor);

//Tipos de datos (Objects)

array = Array(1, 2, 3);
let array2 = [1 ,2, 3];
console.log(array, array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date ("1995-10-04"));
console.log(typeof new Error("mensaje de error"));

console.clear();

//---------Strings-------------

str = "Hola futuro";
console.log(str, str.length);
console.log(str.indexOf("futuro"), str.indexOf("cadena no presente"));

console.log("La ultima ocurrencia de 'u' esta en el indice", str.lastIndexOf('u'));

console.log(str.substring(1, 3));

console.log("Hola mundo".concat(". Adios mundo"));

console.log("Hola mundo" + ". Adios mundo"); //Equivalente a concat

str = str + ". Adios Mundo";
str += ". Adios Mundo";
console.log(str);

console.log(str.replace("Mundo", "futuro"));
console.log(str.replaceAll("Mundo", "futuro"));
console.log(str.toLowerCase());// minusculas
console.log(str.toUpperCase());// mayusculas

console.log(`El dia de mi cumpleaños es ${day}` );
console.log("El dia de mi cumpleaños es", day, ".");

//Parsing(coversion de un tipo a otro)
let number = Number("algo"); //NaN = Not A Number. No genera error.
console.log(number, typeof number);

 number = Number("1000"); 
console.log(number, typeof number);

number += "1000";// Entiende que es una concadenacion y no una suma.
console.log(number, typeof number);

console.log("1" + 1, "1" - 1);// "" + number = concat; // ya que el + puede concadenar texto.
                              //"" - number = number // ya que el signo menos solo sirve para restar.


//--------------Objects----------------

let person = { 
    name: "John",//nombre de propiedad sin comillas"
    age: 30,
    blonde: false,
    walk: function() {
        console.log("Hey, estoy saltando");
    },

    jump() {
        console.log("Hey, estoy saltando")
    }
} //ES6

console.log(typeof person, person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

person.name = "Jane";


console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

//Acceso por corchetes / Brackets notation
let nombreDeLaPropiedadQueQuiero = "blonde";
console.log(person[nombreDeLaPropiedadQueQuiero]);

//Ampliacion

person.children = ["Martha", "Peter"];
console.log(person);
console.log(person.children[0],person.children[1]);

person.walk();
person.jump();

console.log(person);
console.log({});

console.log(typeof {}, typeof [], typeof "");

