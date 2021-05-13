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



require("./config/config");
const express = require("express");
const app = express();

//pkill -f nodemon -> lo hacemos para eliminar todos los nodemon que hay por detras.


app.use(express.json());

let users = []

app.get("/", (req, res) => {
    
    const user = {name:"John", email:"john@gmail.com"}

    res.json({
       ok:true, results:users
    });
});

app.post("/", (req, res) => {
    const body = req.body; // necesita el middleware, definido arriba: app.use(express.json());

 

    if (body.username) {
        res.status(400).json({ ok: false, message: "Name is required" });
    } else {
        users.push(body);
        res.status(201).json({ user: body });
    }
});

app.put("/:id", (req, res) => {
    let id = req.params.id
    
    res.json({
        message :`peticion PUT recibida correctamente, ${id}`
        
    });

});

app.delete("/:id", (req, res) => {
    const id = req.params.id
    
    const removedUser = users.splice(id, 1);

    res.status(200).json(removedUser);

    // res.json({
    //     message :`peticion DELETE recibida correctamente, ${id}`
        
    // });

});


app.listen(process.env.PORT, () => {
    console.log("Listening on port : ", process.env.PORT);
});