// Apartado 1 - generar array

let employees = [];

for (let i = 1 ; i <=100; i++){
    const newEmployees = {
        cargo: `Empleado ${i}`,
        rendimiento: Number(Math.random().toFixed(2)) ,
        salario: Math.ceil(Math.random() * (4000 - 1250)+ 1250)
    };
    employees.push(newEmployees);
}

console.log("1.gererar array", employees);

//APARTADO 1 CON CONSTRUCTOR
// function Employee(cargo, rendimiento, salario){
//     this.cargo = cargo;
//     this.rendimiento = rendimiento;
//     this.salario = salario;
// }
// for (let i = 1; i <= 100; i++){
//     employees.push(new Employee(
//         `Empleado${i}`,
//         Number(Math.random().toFixed(2)),
//         parseInt(Math.random()* (4000 - 1250) + 1250)));
// }

// 2 Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback.

employees.sort (function(empleado1 , empleado2){
    return empleado1.rendimiento - empleado2.rendimiento;
});

console.log("2, Ordenar por rendimiento", employees);

// 3 Ordenar por salario

employees.sort ((empleado1, empleado2) => empleado1.salario - empleado2.salario);
console.log("3- ordenar por salario", employees);

// 4 Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará 
//dentro del string Cargo. Usar una función nombrada como callback.

function sortByEmployeeNumber(empleado1, empleado2) {

    return empleado2.cargo.split(" ")[1] - empleado1.cargo.split(" ")[1];
    //return empleado2.cargo.slice(9) - empleado1.cargo.slice(9);
}

employees.sort(sortByEmployeeNumber);

console.log("4- ordenar de forma decreciente", employees);

// 5 - Filtrar e imprimir ciertos campos

console.log("5, Filtrar e imprimir ciertos campos");

employees
.filter(employee => employee.salario > 2500)
.forEach(employee => console.log(employee.cargo, employee.salario));


// 6 Usando map: subir el sueldo un 25% a los que cobren menos de 1500€ y volver a hacer el punto 5

employees = employees.map(employee => {

   if (employee.salario < 1500) {
    employee.salario = employee.salario * 1.25;
} 
    return employee;

});

console.log("6, Subir el sueldo", employees);

// 7 - Calcular coste total para la empresa

const totalCost = employees.reduce((salarySum, employee)=> salarySum + employee.salario * 1.15, 0);
     
console.log("Coste total de la empresa ", totalCost);

// 8 - 

employees = employees.filter(employee => employee.rendimiento >= 0.3);
console.log("8 / 8.1 : Despedir a los que tengan un rendimiento menor a 0.3", employees);





let averageSalary = employees.reduce((salarySum, employee)=> salarySum + employee.salario ,0) / employees.length;
averageSalary = averageSalary.toFixed(2);

console.log("8 / 8.2 : Calcular el sueldo medio de la empresa",averageSalary );




employees = employees.map(employee => {
    if(employee.rendimiento > 0.7) {
        employee.salario = employee.salario * 1.25;
        console.log("Subido el sueldo de", employee.cargo ,"y su sueldo", employee.salario);
    }
});

// employees.forEach(employee => {
//     if(employee.rendimiento > 0.7) {
//         employee.salario = employee.salario * 1.25;
//         console.log("Subido el sueldo de", employee.cargo);
//     }
// })




console.log("8 / 8.3 : Subir el sueldo de los que tengan un rendimiento de 0.7",averageSalary );


