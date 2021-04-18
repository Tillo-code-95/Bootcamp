function User(name, firstLastName, secondLastName, email, age, city, productsCount){
    this.name = name,
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age
    this.city = city;
    this.productsCount = productsCount;
    this.incrementProduct = function () {
        this.productsCount ++ ;
    }
    this.emptyProducts = function () {
        this.productsCount = 0;
    }


}
// creamos usuarios para añadir a nuestro select.
const users = [
    new User("Victor", "Perez", "Corpas", "tillorr10@gmail.com", 25, "Malaga", 0),
    new User("Francisco", "Perez", "Perez", "fperez@gmail.com", 59, "Malaga", 0),
    new User("Maria", "Corpas", "Martinez", "mcorpas@gmail.com", 53, "Malaga",0),
    new User("Jorge", "Perez", "Corpas", "jperez@gmail.com", 20, "Malaga", 0)
];

//seleccionamos nuestros ID del html.
const select = document.getElementById("userSelect");
const list = document.getElementById("userInfo");
const button1 = document.getElementById("incrementButton");
const button2 = document.getElementById("emptyButton");

// Usamos un forOf para que itere sobre cada usuario creado y mediante una variable 
//"option" queremos que su contenido sea igual al nombre de los usuarios ya creados
//y despues añadirlo a nuestro select.

for (let user of users) {
    const newOption = document.createElement("option");
    newOption.textContent = user.name;
    select.appendChild(newOption);
};

// queremos rellenar la lista 
// Vamos a utilizar forIn se utiliza para acceder a las propiedades de un objeto.
 
function fillList(user) {

    list.innerHTML = "";

    for (const propertyName in user) {

        const value = user [propertyName];
    
        if (typeof value !== "function") {
            //console.log(`propertyName: ${propertyName}, value ${value}`);
    
            const newListItem = document.createElement("li");
            newListItem.innerHTML = `<b>${propertyName}:</b> ${value}`;
            //newListItem.textContent = `<b> ${propertyName} : </b> ${value}`;
            newListItem.classList.add("list-group-item");
            
            list.appendChild(newListItem);
    
            //list.innerHTML += `<li class = "list-group-item"> <b> ${propertyName}:</b> ${value} </li>`
        }
    
    }
}

// Una vez creada la tabla se le llama con la funcion fillList y la posicion 0 para que 
// aparezca con los datos del primer usuario ya creado.

fillList(users [0]);

function processProducts (e) {
    const selectedUser = users.find(user => user.name === select.value);

    if (e.target === button1) {
        selectedUser.incrementProduct();
    
    } else {
        selectedUser.emptyProducts();
    }

    fillList(selectedUser)
};

// En esta funcion creamos una constante selectedUser, aplicamos un find() que recibe por parametros un usuario de nuestra
// lista , selecciona su nombre (user.name) y le decimos que sea igual al valor de nuestro select.

//despues en el if asignamos e.target (encargado de disparar un evento) a nuestro boton 1 para incrementar valores del carrito
// y  en el else al mismo target le asignamos la funcion emptyproducts que se encarga de vaciar el carrito.


//Añadimos los listener , para nuestro select le añadimos un evento de tipo "change" ya que necesitamos que 
// la cabecera de la lista al seleccionar un  nombre devuelva las propiedades asignadas a dicho nombre 

select.addEventListener("change", e => {
  
    const selectedUser = users.find(user => user.name === select.value);

    fillList(selectedUser);
});

button1.addEventListener("click", processProducts);
button2.addEventListener("click",processProducts);

// al tener un target para 2 botones, este actua igual para 
//cada uno y es el encargado de disparar el evento
