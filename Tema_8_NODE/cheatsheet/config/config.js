// Configuramos la variable de entorno llamada PORT, 
//para que asigne el puerto 3000 si no exisitiera.

process.env.PORT = process.env.PORT || 3000;

//> require("crypto").randomBytes(64).toString("hex");

process.env.SEED = process.env.SEED || "SUPER SECRET KEY";
