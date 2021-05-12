// 1. Usaremos la librería de express()
// 2. Nuestro server escuchará en el puerto 3000.
// 3. Endpoint GET de un usuario. Devolverá un objeto JSON
// 4. Endpoint PUT de un usuario al que le pasaremos la ID del usuario que queremos actualizar.
// Devolveremos en un objeto JSON su id
// 5. Endpoint DELETE de un usuario. Devolverá un objeto JSON.
// 6. Endpoint POST para crear un usuario. Le pasaremos la información necesaria para crear un
// usuario. Si el campo nombre no está definido, devolveremos un código de error HTTP 400, donde
// indicaremos que el nombre es requerido. Devolveremos la información proporcionada en la
// petición POST en un objeto user




const express = require("express");
const app = express();

//pkill -f nodemon -> lo hacemos para eliminar todos los nodemon que hay por detras.

//Antes de 
app.use(express.json());


app.get("/user", (req, res) => {
    res.json({message : "peticion GET recibida correctamente"});
});

app.post("/", (req, res) => {
    let body = req.body
    

    res.json({
       
        message : "peticion POST recibida correctamente",
        username: body.username
    });
});

app.put("/user/:id", (req, res) => {
    let body = req.body
    
    res.json({
        message : "peticion PUT recibida correctamente",
        id: body.id
    });

});

app.listen(3000);