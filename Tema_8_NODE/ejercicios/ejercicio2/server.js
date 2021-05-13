//IMPORTAMOS AQUI LA RUTA
require("./config/config");

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const list = require("./routes/todo");

//Antes de los endpoints, usamos los middlewares

app.use(express.json());

app.use("/list", list);

mongoose.connect("mongodb://localhost:27017/list", {
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