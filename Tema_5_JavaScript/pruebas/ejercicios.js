// Apartado-1 /Define e inicializa un array con 5 elementos string en una sola línea.

console.log("APARTADO 1");

const myHouse = ["bedroom", "bath", "kitchen", "terrace", "livingroom"];

const myBedroom = ["television", "posters", "playstation", "bed", "rooter"];

const myTeam = ["realmadrid", "barcelona", "malaga", "valencia", "betis"];

console.log(myHouse);
console.log(myBedroom);
console.log(myTeam);

//Apartado-2 / Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente. Elimina por
//completo el primero y añade dos nuevos números al inicio. En cada paso, imprime la longitud y el array
//entero por consola utilizando un string template del tipo: `Longitud: ${}`.

console.log("APARTADO 2");

const myArray = [];
console.log(myArray);
console.log(`La longitud de  mi array es : ${myArray.length}`);

myArray.push(4, 8, 12);
console.log(myArray);
console.log(`La longitud de  mi array es : ${myArray.length}`);

myArray.shift();
console.log(myArray);
console.log(`La longitud de  mi array es : ${myArray.length}`);

myArray.unshift(7, 9);
console.log(myArray);
console.log(`La longitud de  mi array es : ${myArray.length}`);

//Apartado - 3 / Escribe una función nombrada que devuelva true si el argumento 
//dado es de tipo boolean y false en caso contrario.

console.log("APARTADO 3");

function myBool (a) {

return (typeof a === "boolean")
    
}

console.log(myBool(true));
console.log(myBool("true"));
console.log(myBool(6));


