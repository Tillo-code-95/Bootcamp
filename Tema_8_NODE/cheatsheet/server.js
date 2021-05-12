

const express = require("express");
const app = express();

//Antes de los endpoints, usamos los middlewares

app.use(express.json());

app.get("/", (req, res)=> {
    res.json({message:`Peticion GET recibida correctamente`});
 });


app.get("/:id", (req, res)=> {
    let id = req.params.id;
    res.json({message:`Peticion GET con parametro: ${id}`});
 });

app.post("/", (req, res)=> {
    let body = req.body;

    if(body.username) {
        res.status(200).json({mesagge: `Recibido username : ${body.username}`});

    } else{
        res.status(400).json({ ok:false , mesagge: `El username es obligatorio`});
    }


    
});
app.listen(3000);

