// Apartado-1 /Define e inicializa un array con 5 elementos string en una sola línea.

console.log("APARTADO 1");

let myHome = ["bath" , "kitchen" , "bedroom" , "living-room" , "terrace" ]

console.log(myHome);

//Apartado-2 / Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente. Elimina por
//completo el primero y añade dos nuevos números al inicio. En cada paso, imprime la longitud y el array
//entero por consola utilizando un string template del tipo: `Longitud: ${}`.

console.log("APARTADO 2");

let myArray = [];
myArray.push (6 , 7 , 8);
console.log(myArray, myArray.length);

myArray.shift ();
console.log(myArray, myArray.length);

myArray.unshift (9 , 10);
console.log(myArray, myArray.length);

//Apartado - 3 / Escribe una función nombrada que devuelva true si el argumento 
//dado es de tipo boolean y false en caso contrario.

console.log("APARTADO 3");

function isBool(value) {
    return typeof value === "boolean";
}
console.log(isBool(true));
console.log(isBool("true"));
console.log(isBool(5));

//Apartado - 4 / Escribe una función que devuelva 
//la longitud de un string recibido por argumento.

console.log("APARTADO 4");

function myString (X) {

    return X.length;

}

console.log(`Mi variable tiene una longitud de ` , myString(`miNombre`), `letras`);

//Apartado - 5 / Crea una función de flecha 
//que reciba una cantidad de minutos y lo devuelva convertido en segundos.

console.log("APARTADO 5");

minutes = m => m * 60;

console.log(`Los minutos de m convertidos a segundos son`, minutes(4));

//Apartado -6/Crea una función que reciba un número y devuelva el siguiente número par.
//(Si él es par, lo devolverá directamente)

console.log("APARTADO 6");

function myNum (y) {

    if (y % 2 == 0) {
        
        return y ;

    } else (y % 2 == 1); {
       
        return y + 1
    
    }


}

console.log(myNum(7));

//Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes
//obviar los años bisiestos.

console.log("APARTADO 7");

myAge = a => a * 365;

console.log(`Has vivido `, myAge (25) , `dias`);

// Apartado - 8 / Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays
//de diferentes longitudes.

console.log("APARTADO 8");

// function devolverArray (e) {

//     console.log(e[e.length -1]);
// }

//devolverArray = e => console.log(e[e.length -1]);

const devolverArray = function (e) {
    console.log( `El ultimo valor de mi array es :`, e [e.length -1]);
}



devolverArray(myArray);
devolverArray(myHome);



// Cuando introducimos e por argumento y calculamos que nos devuelva el ultimo
// valor de un array al llamar a la funcion fuera de las llaves nos imprime
// el array + la operacion que hallamos hecho.


// Apartado - 9 / Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
//frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
//recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales

console.log("APARTADO 9");

//function miGranja (p, c, v) {
    //p = p * 2;
    //c = c * 4;
    //v = v * 4;
    //console.log(`El numero total de patas es : ${p + c + v}`);
//}    // el signo $ se utiliza para incluir parametros en un string y que este no se convierta en string.

const miGranja = function (p, c, v) {

    p = p * 2;
    c = c * 4;
    v = v * 4;

    console.log(` El numero total de patas es : ${p + c + v}`);
}



miGranja(50, 60 ,80);

// Apartado - 10 / . Crea una función que determine si dos 
//datos recibidos por argumentos son del mismo tipo.

console.log("APARTADO 10");

// function miTipo (i , j) {

//     if (typeof i === typeof j) {

//        console.log("Es el mismo tipo"); 
    
//     } else {
//         console.log("No es el mismo tipo"); 
//     }

    
// }

const miTipo = function (i , j) {

    if (typeof i === typeof j) {

        console.log("Es el mismo tipo"); 
     
     } else {
         console.log("No es el mismo tipo"); 
     }

     
}

miTipo(-9 , 5);

// Apartado- 11 / Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
//palabra de la frase original. Investigar método existente de los strings para este fin

console.log("APARTADO 11");

let a = "Hola desde el apartado once";
let b = "Hola desde una segunda frase";

// function myString1 (s) {
   
//     s = s.split(" ");
//     console.log(s);
// }

const myString1 = function (s) {

    s = s.split(" ");
    console.log(s);

}

myString1(a);
myString1(b);



// apartado - 12 / Inicializa dos objetos, address1 y address2 
//con las propiedades: provincia, ciudad, municipio, código
//postal, calle, número, planta, y número de puerta.

console.log("APARTADO 12");

let address1 = {

    provincia : "Malaga",
    ciudad : "Malaga",
    municipio : "Cartama",
    codigoPostal : 29010,
    Calle : "Aurora",
    numero : 4,
    planta : 1, 
    numeroDePuerta : 1

}

let address2 = {

    provincia : "Comunidad de Madrid",
    ciudad : "Madrid",
    municipio : "Salamanca",
    codigoPostal : 27000,
    Calle : "Poeta",
    numero : 2,
    planta : 6, 
    numeroDePuerta : 3

}

console.log(address1);
console.log(address2);

//Apartado-13 /Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD (toplevel domain) como, por ejemplo .com / .es / .org, etc. Crea una función que se llame parseDomain() que
//reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld.

console.log("APARTADO 13");

// let c = "Codespaceacademy.com";

function parseDomain(p) {

   const array = p.split(".");
    
    const object = {
        Domain : array[0],
        tld : array[1]
    }

    return object

}

console.log(parseDomain("Codespaceacademy.com"));
console.log(parseDomain("Besoccer.com"));
console.log(parseDomain("Elpais.es"));

// Apartado 14. Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando
//dicha funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el
//mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu función con dos estos inputs:

console.log("APARTADO 14");

function myNumber (n, m) {

    if (typeof n == typeof m  &&  n == m) {

        console.log(`El resultado del apartado-14 es :`,true);

    } else {

        console.log(`El resultado del apartado-14 es :`,false);
    }

    

    
}

myNumber ("5", 5);
myNumber (5, 5);


//Apartado 15 - Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso
//contrario.

console.log("APARTADO 15");

let d = "Mi string uno";
let e = "Mi string cuatro";

function myString2 (l, m) {

    if (l.length === m.length){

        console.log( `El resultado del apartado-15 es :`,true);
    } else {
        console.log( `El resultado del apartado-15 es :`,false);
    }
}

myString2 (d, e);

//Apartado 16 - Crea una función que reciba un string y determine 
//si está vacío sin utilizar la propiedad length.

console.log("APARTADO 16");

let f = "No estoy vacio";

function myString3(s) {
    
    if ( s === "" ) {
        console.log(true);

    } else {
        console.log(false);
    }


}

myString3(f);

//Apartado - 17 Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes:
//• while • for • for of • forEach.

console.log("APARTADO 17");

 myHome = ["bath" , "kitchen" , "bedroom" , "living-room" , "terrace"];

 console.log(`Bucle for`);

for (let index = 0; index < myHome.length; index++) {
    console.log(myHome[index]);
    
}

console.log("While");

let contador = 0
while (contador <= 4 ){

    console.log(`Indice ${contador} : ${myHome[contador ] }`);
    contador++;
}


console.log("forEach");

myHome.forEach(function(item, index) {

console.log(`Indice ${index} : ${item}` );

});

console.log("forOf");

for (const item of myHome) {

    console.log(item);
}

//Apartado - 18 /Crea una función que reciba un string y un número N 
//y devuelva el string original repetido N veces.

console.log("APARTADO 18");

function repeatString (n , m) {



console.log(n.repeat(m));

}

repeatString("No hare memes del profesor " , 2);

//Apartado - 19 / Crea una función que recibe un objeto con dos campos, votos positivos y 
//votos negativos y que devuelva la cuenta final.

console.log("APARTADO 19");

function misVotos(p , n) {
    
    console.log(`Votos positivos : ${p}, Votos negativos : ${n}`);
    console.log(`El resultado final es : ${p - n}`);

}

misVotos(35 , 15);

//Apartado - 20 / Crea una función que recibe un array de tipos de datos mezclados y 
//que devuelva otro array con el tipo de cada uno de los elementos.

console.log("APARTADO 20");

let objetos = ["String", 4.5, undefined , [],  "codespace", {}] ;

function getTypes (a) {

a.forEach(function (item) {

    console.log( typeof item);

})



}

getTypes(objetos);

// Apartado - 21 - Función que dado un array de números con formato string 
//devuelva un array con los números ya parseados.

console.log("APARTADO 21");

let myNumString = ["1", "1.5", "3", "7.8","9"];

function getParsedNumbers (a ) {

    a = a.map(Number); // Para parsear un array de strings con metodo "map" igualamos la variable con la operacion 
                        // con map "a.map(Number)" Number convierte todos los elementos a tipo numero.
    console.log(a);

}

getParsedNumbers(myNumString);


//Apartado - 22 - Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o
//igual que cero y “Negativo” en caso contrario. Usa el operador ternario.

console.log("APARTADO 22");

// function myNumber1 (n) {

//     if (n >= 0) {
    
//         console.log("postivo");
        
//     } else {
//         console.log("negativo");
//     }


// }

// myNumber1(-7);

const isPositive = num => num >= 0 ? "Positive" : "Negative";
console.log(isPositive(-5));
console.log(isPositive(5));
console.log(isPositive(0));

//Apartado-23 / Crea una función que dado un array cualquiera y un índice, 
//borre el elemento guardado en ese índice.

console.log("APARTADO 23");

let newArray = [14, 25 , 45 ,56];

function deleteElement (a, b) {

    a.splice(b , 1);
    console.log(a);

}

deleteElement(newArray, 0);

//const removeItem = (array, index) => array.splice(index, 1);

// Apartado 24 / Usando la función del apartado anterior, crea otra función que dado un array de números y un número a
//filtrar, devuelva un array borrando todos las apariciones de dicho número.

console.log("APARTADO 24");

const removeItem = (array, index) => array.splice(index, 1);

const filterItem = (array, numberToFilter) => {

    array.forEach((element, index) => {

        if (element === numberToFilter) {

            removeItem(array, index);
        }

    });
}

const arrayFiltered = [1, 5, 6, 7, 5];
filterItem(arrayFiltered, 5);
console.log(arrayFiltered);

//apartado - 25 / Crea dos funciones que recibirán un objeto, la primera devolverá un array con los nombres de todas sus
//propiedades. La segunda devolverá un array con los valores de dichas propiedades.
//Investigar los métodos keys y values del prototipo de Object.

//   616 11 47 77 Enrique 
//  precio/hora : 

//  lugar :
//  hora :
//  fecha :
//  

console.log("APARTADO 25");


function myObject (a) {

    a = Object.keys(a)
    console.log(a);
    
}


function myObjectvalue(b) {

   b = Object.values(b);

   console.log(b);



}

// const myObjectvalue = (b) => Object.value (b)-- Funcion de flecha;


myObject(address1);
myObjectvalue(address1)



// Apartado-26 / Crea una funcion que invierta un string

console.log("APARTADO 26");

let g = ".nóicamargorp ed sedrat sal ne éfac led érasuba oN";

function stringReverse (a) {

a = a.split("").reverse().join("")
console.log(a);

}

stringReverse(g);

//Apartado 27 / Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas.

console.log("APARTADO 27");

let h = "darth coder";
let i = "Darth CODER";

let k = "HOLA MUNDO";
let l = "hola mundo";

function misLetras (a ,b) {
 
    a = a.toLowerCase();
    b = b.toLowerCase();

    if (a === b) {
        console.log(true);

    } else {
        console.log(false);
    }


}

misLetras (h , i);
misLetras (k , l);

//Apartado- 28 / Crea una función que convierta en mayúscula sólo la primera letra de cada palabra de un string dado. El
//apartado 11 será de ayuda. Investigar cómo unir un array de strings en un único string.

console.log("APARTADO 28");


let j = "comprobare los errores de la consola antes de pedir ayuda";


    function letraMayuscula (a) {

        a = a.toLowerCase()
        .split(' ')
        .map((a) => a.charAt(0).toUpperCase() + a.substring(1))
        .join(' ');

        console.log(a);

    }

    letraMayuscula(j);
    


// Apartado- 29 / Crea una funcion en una unica linea que reciba un valor logico
// y devuelva el contrario. 

console.log("APARTADO 29");

const negate = (logical) => !logical;

console.log(negate(true));
console.log(negate(false));