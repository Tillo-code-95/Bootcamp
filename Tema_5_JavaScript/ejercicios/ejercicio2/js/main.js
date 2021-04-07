

function User(name, firstLastName, secondLastName, email, age, city, productsCount) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = productsCount;
    this.incrementProducts = function () {
    this.productsCount++;
    },
    this.emptyProducts = function () {
    this.productsCount = 0;

    }
}

//Data
const users = [
    new User("Fran", "Gómez", "Fernández", "fgomez@gmail.com", 35, "Málaga"),
    new User("Lucía", "García", "Ruíz", "lgarcia@gmail.com", 41, "Madrid"),
    new User("María", "Núñez", "Coronado", "mnunez@gmail.com", 18, "Albacete"),
];

//users.forEach(user => console.log(user.email));

//Selectors

const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");

for (let user of users) {
    const newOption = document.createElement("option");
    newOption.setAttribute("option", user.email); 
    newOption.textContent = user.name;
    select.appendChild(newOption);
}