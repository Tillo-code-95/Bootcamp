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
console.log(typeof num, typeof num2,  typeof(5), typeof"5");


// let str ="string" ES IGUAL a "String"