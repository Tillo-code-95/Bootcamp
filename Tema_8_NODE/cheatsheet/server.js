//IMPORTAMOS AQUI LA RUTA
require("./config/config");

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const users = require("./routes/users");
const login = require("./routes/login");

//Antes de los endpoints, usamos los middlewares

app.use(express.json());

app.use("/users", users);
app.use("/login", login);

mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology : true,
    useCreateIndex: true

});

const db = mongoose.connection;

db.on("error", err => console.log("Conection to DB failed", err));
db.once("open", () => console.log("Conected to DB successfuly"));





app.listen(process.env.PORT, () => {
    console.log("Listening on port : ", process.env.PORT);
});

