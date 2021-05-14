const express = require("express");
const ramda = require("ramda");
const bcrypt = require("bcrypt");
const router = express();

const User = require("../models/user");

//Antes de los endpoints, usamos los middlewares
// cambiamos los app por router

router.use(express.json());

router.get("/", (req, res)=> {
    // Simila al find de mongo. Si el filtro esta vacio,
    // me devuelve todos los documentos.
    const PAGE_SIZE = 2;
    const page = req.query.page || 1;



    //console.log(page);
    User.find({active:true})

    .skip((page - 1)* PAGE_SIZE) // Numero de documentos que saltará
    .limit(PAGE_SIZE) // Numero de documentos que devolverá
    
    .exec((error, users) => {
        

        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(200).json({ok :true, users})
        }


    })
 });


// router.get("/:id", (req, res)=> {
//     let id = req.params.id;
//     res.json({message:`Peticion GET con parametro: ${id}`});
//  });

router.post("/", (req, res)=> {
    let body = req.body;

    const user = new User({
        username:body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
    });

    user.save((error, savedUser) =>{
        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(201).json({ok :true, savedUser})
        }
    });

    // if(body.username) {
    //     res.status(200).json({mesagge: `Recibido username : ${body.username}`});

    // } else{
    //     res.status(400).json({ ok:false , mesagge: `El username es obligatorio`});
    // }


    
});

router.put("/:id", (req, res) =>{
    const id = req.params.id;
    const body = ramda.pick(["username", "email"], req.body);


    User.findByIdAndUpdate (
        id, 
        body,
        {new: true, runValidators: true, context: 'query'}, // options
        (error, updatedUser) => {
            if(error) {
                res.status(400).json({ok: false, error});
            } else {
                res.status(200).json({ok :true, updatedUser})
            }
    
        }
    );
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;

    // User.findByIdAndRemove(id, (error, removedUser)=>{
    //     if(error) {
    //         res.status(400).json({ok: false, error});
    //     } else {
    //         res.status(200).json({ok :true, removedUser})
    //     }
    // });
    User.findByIdAndUpdate (
        id, 
        body,
        {new: true, runValidators: true, context: 'query'}, // options
        (error, updatedUser) => {
            if(error) {
                res.status(400).json({ok: false, error});
            } else if (!updatedUser){
                res.status(400).json({ok:false , error: "User not found"});
            } else { 
                res.status(200).json({ok :true, updatedUser})
            }
    
        }
    );
});

module.exports = router;