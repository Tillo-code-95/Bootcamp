// ------------Uso de JS externo-------------
function saludo() {
    alert("Hola desde un script interno");
    console.log("has hecho click");
}
// document.getElementsByTagName("a").item(1).addEventListener("click", saludo)

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
    },

    presentarse() {
        console.log(`Me llamo ${this.name}, tengo ${this.age} años y ${this.blonde ? "soy rubio" : "soy moreno"}`); 
    }

} 
person.presentarse();
//ES6

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

//This(concepto)

const person2 = {
    name: "Thomas",
    talk() {
    
        console.log(`Me llamo ${this.name}`);
         /* Siempre que tengamos que hacer referencia al propio objeto(person2) donde estamos
        lo haremos atraves de "this".*/
    }
    
}

person2.talk();

const person3 = {
    name: "Sarah",
    talk() {
    
        console.log(`Me llamo ${this.name}`);
       
    }
    
}

person3.talk();

//Object Constructor using functions

function Car(brand ,color ,weight ,topSpeed) {
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.getDescription = function() {
        return `This ${this.color}, ${this.brand} weights ${this.weight}` +
        `kilos and can reach up to ${this.topSpeed} kms/h `;
    }
}

const car1 = new Car("Mercedes", "red", 2000, 200);
const car2 = new Car("Volvo", "white", 2500,180);
const car3 = new Car("Volskwagen", "blue", 1500, 175);

console.log(car1, car2, car3);

console.log(car2.weight);

console.log(car3.getDescription());










 console.clear();

//--------------Arrays----------------

let selectedColors= ["red" , "blue"]; //Array strings
console.log(selectedColors,selectedColors.length, typeof selectedColors);

selectedColors[2] = "green";//si no existe no lo crea
console.log(selectedColors, selectedColors.length);

selectedColors.push("violet", "white");// Añade nuevos elementos a un array
console.log(selectedColors, selectedColors.length);

selectedColors.pop();//Por defecto solo borra el ultimo valor existente 
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("white");//Metodo que traslada el ultimo valor a la primera posicion.
console.log(selectedColors, selectedColors.length);

selectedColors.shift();//Eliminamos el primer valor dentro del array
console.log(selectedColors, selectedColors.length);

selectedColors.sort();//Para ordenar elementos alfabeticamente(incluso arrays de objetos)

console.log("El color rojo esta en el indice", selectedColors.indexOf("red"));

console.log(selectedColors.slice(1, 3));// Selecciona los colores (1 y 3)
console.log(selectedColors);

console.log("Los elementos borrados son" , selectedColors.splice(1, 3));// Elimina los colores (1 y 3)
console.log("El array se ha quedado asi", selectedColors);

selectedColors.splice(1, 1);
console.log("Los elementos borrados son: ", selectedColors.splice(1, 2));


// console.log(selectedColors[selectedColors.indexOf("red")+1]); Para imprimir el elemento siguiente a "red".

/*Crear un niño que tenga las propiedades, nombre, altura, genero , amigoS
Amigos estara inicialmente vacio y añadiremos posteriormente 3 elementos con los nombres.
Despues, añadiremos uno extra al inicio.*/

const kid = {
  name: "Arthur",
  height:"1.80",
  gender:"Male",
  friends: [],
  perderAmigo() {
      this.friends.pop();
    }
  
}
console.log(kid);


//posicion de push
kid.friends.push ("John", "Chase", "Michael");
console.log(kid);

kid.friends.unshift("Tom");
console.log(kid);

kid.perderAmigo();
console.log(kid);

kid.perderAmigo();
kid.perderAmigo();
kid.perderAmigo();
kid.perderAmigo();

console.log(kid);


//--------------Conditions----------------
const randomNumber = 9;
const guessedNumber = "5";

if (typeof randomNumber !== typeof guessedNumber) {
    console.log("Hey , tienes que introducir el mismo tipo.");
}
if (typeof randomNumber == typeof guessedNumber && randomNumber !== guessedNumber) {

}

if (typeof guessedNumber === "boolean") {
    
}
// if (randomNumber === guessedNumber) {
//     console.log("has acertado el numero");

// } else if (randomNumber > guessedNumber) {
//    console.log("El numero secreto es mayor");

// } else {
//     console.log("El numero secreto es menor");
// }

// Ternanry operator (operador ternanrio(para simplificar el if/ else))

//Damos valor a una variable con un operando ("="->if),("?" -> Entonces ) (: -> Sino)

let variable = 12 < 10 ? "es menor" : "el primero es mayor";
console.log(variable);

/*presentarse() {
    console.log(`Me llamo ${this.name}, tengo ${this.age} años y ${this.blonde ? "soy rubio" : "soy moreno"}`); 
}

} 
person.presentarse();*/

//Switch

let option = 2;

switch (option) {
    case 1:
        //Bloque de codigo de valor 1
        console.log("Option vale 1");
        break;

    case 2:
        //Bloque de codigo de valor 2
        console.log("Option vale 2");
        break;

    case 3:
        //Bloque de codigo de valor 3
        console.log("Option vale 3");
        break;

    default: // De otro modo de Pseint
        console.log("otra opcion");
        break;
}
console.clear();
//--------------Funciones----------------

//--------------Nombradas
function greet(name, lastName) {
    console.log(`Hola, ${name} ${lastName}. ¿Que tal?`);
    
}
greet();
greet("Marcos" , "Aurelio");

//Cuadrado de un numero
function cuadrado(num1) {
    let cuadrado = num1 * num1;
    return cuadrado;
    
}
console.log(cuadrado(3));

// Forma simplificada(Usando return)

function cuadrado(num1) {
    
    return num1 * num1;
    // return rompe o para la funcion lo que hay detras o debajo es inalcanzable.
}
console.log(cuadrado(5));

//--------------Anónimas

let numbersArray = [5, 51, 1, 15, 2];
console.log(numbersArray);
numbersArray.sort(); // Me lo ordena segun ASCII
console.log(numbersArray);



function orderNumbers(a, b) {

    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    }else {
        return 1;
    }
}

// function orderNumbersV2(a, b) {
//     return a - b;
// }


numbersArray.sort(function (a, b) {return a - b});


// numbersArray.sort(orderNumbers);
// console.log(numbersArray); 

console.clear();

//--------------Funciones de flecha (Arrow function)

let perimeterOfSquare = function (side) { // Función anónima normal
    return side * 4;
    }
perimeterOfSquare = function (side) {return side * 4;} // (opcional) Una única línea
perimeterOfSquare = (side) => {return side * 4;} // Sustituyo function por la flecha después de params.
perimeterOfSquare = (side) => side * 4; // Si sólo quiero devolver algo, quito llaves y return.
perimeterOfSquare = side => side * 4; // Si sólo tiene 1 param, puedo quitar paréntesis.
    
    console.log(perimeterOfSquare(5));

// console.log(typeof function() {});
// console.log(typeof (() => {}));



//Como transformar fuc anonima en func de flecha
//Cuadrado de un numero con arrows
function square(num1) {
    let square = num1 * num1;
    return cuadrado;
    
}
console.log(cuadrado(3));

square = (num1) => num1 * num1;
console.log(square(5));


console.clear();

//--------------Funciones de alto orden----------------

//Map

let arr1 = [1, 2, 3];
let arr2 = [];

for (let num of arr1) {

    arr2.push(num*2);
}

arr1 = [1, 2, 3];
arr2 = arr1.map(function (num){
    return num * 2;
});

arr2 = arr1.map(num => num % 2 === 0 ? num : num + 1);

console.log("Resultado con map",arr1 , arr2);

// Apartir de un array con años de nacimiento, calcular edades.

const birthYears = [1980, 1990, 1975, 1970];

const years = birthYears.map(num => 2021 - num);

console.log(years);

// Filter 

const prices = [150, 50, 49, 51, 15, 237];
const expensives = [];

for (let price of prices) {
    if (price >= 50) {
        
        expensives.push(price);
    }
}

console.log(expensives);

const prices = [150, 50, 49, 51, 15, 237];
const expensives = prices.filter(price => price >= 50);
console.log(prices , expensives);

const cars = [
    {
        brand : "BMW", 
        year : 1990,
        plateNumber : "HGT2345"
    },
    {
        brand : "Mercedes", 
        year : 2010,
        plateNumber : "LBT5678"
    },
    {
        brand : "Volvo", 
        year : 2021,
        plateNumber : "DSE4321"
    },
];

console.log(cars.filter(car => car.year > 2008));
console.log(cars.filter(car => car.plateNumber.includes("L")));

// cars = ["BMW", "Mercedes", "Volvo"]

console.log(cars.map(car => car.brand));
console.log(cars.map(car => car.address.street));


//sort
cars.sort((car1, car2) => car1.year - car2.year);

console.log(cars);


//Reduce

const arr = [10, 7, 13, 20];

console.log(arr.reduce((sum , currentNumber) => sum + currentNumber, 0));

//--------------Bucles(Loops)----------------

//--------------For
for (let i = 0; i <= 10; i++) {
    
    console.log(`Indice: ${i}`);
    
}
//Definir y rellenar un array con el indice i

const arrayJ = [];



for (let i = 0; i <= 10; i++) {
    
    arrayJ.push(i);
    
}
console.log(arrayJ);

//While

let contador = 0;

while (contador <= 10) {

    console.log(contador);
    contador ++;
}

while (true) {

    break;
}

console.clear();
// ForEach (Se aplica a los arrays)
// ¡Metodo excluisvo de los arrays!

numbersArray.forEach(function (value , index){
    console.log(`Indice ${index}: ${value}`);
});

// myFunction(numbersArray[0], 1, numbersArray);
// myFunction(numbersArray[1], 2, numbersArray);
// myFunction(numbersArray[2], 5, numbersArray);
// myFunction(numbersArray[3], 15, numbersArray);
// myFunction(numbersArray[4], 51, numbersArray);

// Es lo mismo que hace en forEach.

numbersArray.forEach((value,index) => console.log(`Indice ${index}: ${value}`));

let otherArray = [];

console.log();

numbersArray.forEach(item => otherArray.push(item));

console.log(otherArray);

// For of
// Sirve para iterar tanto los elementos de un array como para strings
// todo lo que tenga elentos dentro.

for (let item of numbersArray) { 
                                
    console.log(item);
}

console.clear();
//---------------Break y Continue

for (let i = 0 ; i < 5; i++) {
    if (i === 3 || i === 2) {
        
        continue; // Salta a la siguiente iteracion.
    }
    console.log("using continue" , i);
}

//Break
let i = 0;
let k = 0;

mainLoop: while (true) {
   
    console.log("Outer loop" , i);
    i++;

    k = 1;

    while (true){
        console.log("Inner loop" , k);
        k++;
        if (i === 5 && k === 5){
                
            break mainLoop;

            
        } else if (k === 5){
            break;
        }
    }

}

