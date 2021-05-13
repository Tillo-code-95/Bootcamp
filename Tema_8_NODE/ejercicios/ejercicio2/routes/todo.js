const express = require("express");
const router = express();

const List = require("../models/list");

//Antes de los endpoints, usamos los middlewares
// cambiamos los app por router

router.use(express.json());

router.get("/", (req, res)=> {
    // Simila al find de mongo. Si el filtro esta vacio,
    // me devuelve todos los documentos.
    List.find({}).exec((error, toDo) => {

        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(200).json({ok :true, toDo})
        }


    })
 });


router.get("/:id", (req, res)=> {
    let id = req.params.id;
    res.json({message:`Peticion GET con parametro: ${id}`});
 });

router.post("/", (req, res)=> {
    let body = req.body;

    const list = new List({
        title: body.title,
        completed: body.completed,
        active: body.active
    });

    user.save((error, savedList) =>{
        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(201).json({ok :true, savedList})
        }
    });

    // if(body.username) {
    //     res.status(200).json({mesagge: `Recibido username : ${body.username}`});

    // } else{
    //     res.status(400).json({ ok:false , mesagge: `El username es obligatorio`});
    // }


    
});
module.exports = router;