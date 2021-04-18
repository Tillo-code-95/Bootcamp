const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

// Selectores 
const emailInput = document.querySelectorAll("input")[0];
const passwordInput =  document.querySelectorAll("input")[1];
const usersList = document.querySelector("#usersList");
document.querySelector("#loginButton").addEventListener("click", login);


function login(event) {

    event.preventDefault();

    const userInfo = {
        email: emailInput.value, 
        password: passwordInput.value
    };
    
    const config = {
        method: "POST" ,
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(userInfo)
    };

    fetch(LOGIN_URL, config)
    .then(response => response.json())
    .then(data => {
        if(data.error) {
            alert(data.error);
        } else {
            fetchAllUsers()
        }
    })


}

async function fetchAllUsers() {
    // fetch(USERS_URL)
    // .then(response => response.json())
    // .then(data => console.log(data));

    let response = await fetch(USERS_URL);
    let data = await response.json();

    let users = [];

    for (let page = 1; page <= data.total_pages; page++){
        response = await fetch(`${USERS_URL}? page = ${page}`);
        let newData = await response.json();
        users = users.concat(newData.data); // users = [...users, ...newData.data];
    }
    usersList.innerHTML = "";
    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);

}

    

