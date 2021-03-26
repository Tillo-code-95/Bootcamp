
//Pide la edad y si es mayor de 18 años indica que ya puede conducir 

const edad = 20;

if (edad >= 18) {
    console.log("Puedes conducir");
} else {
    console.log("Apuntate al carnet");
}

// Pide una nota (numero). Muestra la calificacion segun la nota:

const nota = 1;

if (nota > 0 && nota < 3) {

    console.log("Muy deficiente");
}
if (nota > 3 && nota < 5) {

    console.log("Insuficiente");
}
if (nota >= 5 && nota < 6) {

    console.log("Suficiente");
}
if (nota >= 6 && nota < 7) {
    console.log("Bien");
}
if (nota >= 7 && nota < 9) {
    console.log("Notable");
}
if (nota >= 9 && nota < 10) {
    console.log("Sobresaliente");
} else {
    console.log("La nota introducida no es correcta");
}

console.clear();
// // Pide una nota (numero). Muestra la calificacion segun la nota:
// // switch

// const note = 6.5;

// switch (note) {
//     case (note > 0 && note < 3) :

//         console.log("Muy deficiente");

//         break;

//     case (note > 3 && note < 5) :

//         console.log("Insuficiente");

//         break;

//     case (note >= 5 && note < 6) :

//         console.log("Suficiente");

//         break;

//     case  (note >= 6 && note < 7) :

//         console.log("Bien");

//         break;

//     case(note >= 7 && note < 8) :

//         console.log("Notable");

//         break;


//     case (note >= 9 && note < 10) :

//         console.log("Sobresaliente");

//         break;


//     default:

//         console.log("La nota introducida no es correcta");
        
//         break;
// }


//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
//Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

