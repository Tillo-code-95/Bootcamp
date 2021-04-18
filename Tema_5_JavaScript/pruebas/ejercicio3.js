// Apartado 1 / crea un array 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let empleados = [];

for (i = 1; i <= 100; i++) {
    const newEmpleado = {
        cargo: `Empleado ${i}`,
        rendimiento: Number(Math.random().toFixed(2)),
        salario: getRandomInt(1250, 4000) 
    }

    empleados.push(newEmpleado);
}


console.log(`Apartado 1 - generamos empleados`, empleados);

// Con constructor

// function Empleado(cargo, salario, rendimiento) {
//     this.cargo = cargo,
//     this.salario = salario,
//     this.rendimiento = rendimiento
// }

// 2 Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback.

empleados.sort(function (empleado1,empleado2){

    return empleado1.rendimiento - empleado2.rendimiento

});

console.log(`Apartado 2 - ordenamos por rendimiento`, empleados);

// 3 Ordenar por salario

empleados.sort((empleado1,empleado2) => empleado1.salario - empleado2.salario);

console.log(`Apartado 3 - ordenamos por salario`, empleados);

// 4 Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará 
//dentro del string Cargo. Usar una función nombrada como callback.

function sortEmployee (empleado1 , empleado2) {
    return empleado2.cargo.split(" ")[1] - empleado1.cargo.split(" ")[1]
    //return empleado2.cargo.slice(9) - empleado1.cargo.slice(9)
};

empleados.sort(sortEmployee);

console.log(`Apartado 4 - ordenamos por cargo`, empleados);

// 5  - Usando filter: imprimir el cargo y salario de los que cobren más de 2500$

// let empleados = [];
// const salary = empleados.salario.filter(empleado => empleado > 2500);
// console.log(empleados , salary);

console.log(`Apartado 5 - ordenamos por cargo y salario`);

empleados
    .filter(empleado => empleado.salario > 2500)
    .forEach(empleado => console.log(empleado.cargo, empleado.salario));

// Apartado 6 Usando map: subir el sueldo un 25% 
//a los que cobren menos de 1500€ y volver a hacer el punto 5

console.log(`Apartado 6 - subir el sueldo 25%`);

empleados = empleados.map(empleado => {

    if ( empleado.salario < 1500) {
        empleado.salario = empleado.salario * 1.25;
    } 

    return empleado;
    
})

console.log(empleados);

// 7 - Usando reduce: Obtener el coste total de todos los sueldos para la empresa teniendo en cuenta que
//a la empresa le cuesta tener un empleado su sueldo más un 15% por impuestos.

console.log(`Apartado 7 - obtener coste total `);

const costeTotal = empleados.reduce((sumaSalario, empleado) => {
    sumaSalario += empleado.salario * 1.15
    return sumaSalario;
},0);

console.log(costeTotal.toFixed(2));

// 8 - Usar el método o métodos (reduce / map / filter / sort) que determinemos oportuno e imprimir en
// cada apartado:
// • Despedir a los que tengan un rendimiento menor a 0.3.
// • Calcular el sueldo medio de la empresa.
// • Subir el sueldo de los que tengan un rendimiento superior a 0.7.

empleados = empleados.filter(empleado => empleado.rendimiento >= 0.3);
console.log("8.1: Despedir a los que tengan un rendimiento menor a 0.3", empleados);

let sueldoMedio = empleados.reduce((sumaSalario,empleado) => sumaSalario + empleado.salario,0) / empleados.length;
sueldoMedio = sueldoMedio.toFixed(2);
console.log("8.2: Calcular el sueldo medio de la empresa", sueldoMedio);

empleados = empleados.map(empleado => {
    if(empleado.rendimiento > 0.7){
        empleado.salario = empleado.salario * 1.25;
    }
    return empleado;
});

console.log("8.3: Aumentar sueldo a los que tienen rendimiento superior a 0.7",empleados );
