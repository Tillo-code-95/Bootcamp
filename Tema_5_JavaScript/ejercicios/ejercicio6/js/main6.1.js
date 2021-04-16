const LOGIN_URL = "https://reqres.in/api/login";

// Selectores 
const emailInput = document.querySelectorAll("input")[0];
const passwordInput =  document.querySelectorAll("input")[1];
document.querySelector("#loginButton").addEventListener("click", login);


function login(event) {

    event.preventDefault();

    const userInfo = {
        email: emailInput.value, 
        password: passwordInput.value
    };
    
    const config = {
        method: "POST" ,
        headers: {"content-Type" : "application/json"},
        body: JSON.stringify(userInfo)
    };

    fetch(LOGIN_URL, config)
    .then(response => response.json())
    .then(data => console.log(data));


};

    

