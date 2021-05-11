//1 Buscar documentos en lsas colecciones;
db.restaurant.find().pretty();

//2 Mostrar campos restaurant_id , name- cuisine, borought;
db.restaurants.find({}, { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 }).pretty();


//3 Mostrar mismos campos menos el _id.
db.restaurants.find({}, { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0 }).pretty();

//4 Mostrar mismos campos menos _id y cocina e incluimos codigo_postal
db.restaurants.find({}, { "restaurant_id": 1, "name": 1, "borough": 1, "address.zipcode": 1, "_id": 0 }).pretty();

//5  Escriba una consulta de MongoDB para mostrar todos los restaurantes que se encuentran en el distrito del Bronx.
db.restaurants.find({ "borough": "Bronx" }).pretty();

//6 Escriba una consulta de MongoDB para mostrar los primeros 5 restaurantes que se encuentran en el distrito del Bronx
db.restaurants.find({ "borough": "Bronx" }).limit(5).pretty();

// 7.Escriba una consulta de MongoDB para mostrar los siguientes 5 restaurantes después de omitir los primeros 5 que están en el condado del Bronx.
db.restaurants.find({ "borough": "Bronx" }).skip(5).limit(5);

//8. Escriba una consulta de MongoDB para encontrar los restaurantes que obtuvieron una puntuación de más de 90.
db.restaurants.find({ grades: { $elemMatch: { "score": { $gt: 90 } } } });

//9. Escriba una consulta de MongoDB para encontrar los restaurantes que obtuvieron una puntuación, más de 80 pero menos de 100.
db.restaurants.find({ grades: { $elemMatch: { "score": { $gt: 80, $lt: 100 } } } });

//10. Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168
db.restaurants.find({ "address.coord": { $lt: -95.754168 } });

//11. Escriba una consulta de MongoDB para encontrar los restaurantes que no preparan ningún tipo de cocina de 'estadounidense' y su puntuación de calificación es superior a 70 y latitud inferior a -65.754168.

db.restaurants.find(
    {
        $and:
            [
                { "cuisine": { $ne: "American " } },
                { "grades.score": { $gt: 70 } },
                { "address.coord": { $lt: -65.754168 } }
            ]
    }
);

// 12. Escriba una consulta de MongoDB para encontrar los restaurantes que no preparan ninguna cocina de 'estadounidense' y lograron 
//una puntuación superior a 70 y se ubicaron en la longitud inferior a -65.754168.
//Nota: Realice esta consulta sin usar $ y el operador.

db.restaurants.find(
    {
        "cuisine": { $ne: "American " },
        "grades.score": { $gt: 70 },
        "address.coord": { $lt: -65.754168 }
    }
);

//13. Escriba una consulta de MongoDB para encontrar los restaurantes que no preparan ninguna cocina de 'estadounidense' y obtuvieron una calificación de 'A' que no pertenece al distrito de Brooklyn. 
//El documento debe mostrarse según la cocina en orden descendente.

db.restaurants.find({
    "cuisine": { $ne: "American " },
    "grades.grade": "A",
    "borough": { $ne: "Brooklyn" }
}
).sort({ "cuisine": -1 });

// 14. Escriba una consulta de MongoDB para encontrar el ID del restaurante, el nombre, el municipio 
//y la cocina de aquellos restaurantes que contienen 'Wil' como las primeras tres letras de su nombre.

db.restaurants.find(
    { name: /^Wil/ },
    {
        "restaurant_id": 1,
        "name": 1, "borough": 1,
        "cuisine": 1
    }
);


// 15. Escriba una consulta de MongoDB para encontrar el ID, el nombre, el municipio y la cocina del restaurante
// para aquellos restaurantes que contienen 'ces' como las últimas tres letras de su nombre.

db.restaurants.find(
    { name: /ces$/ },
    {
        "restaurant_id": 1,
        "name": 1, "borough": 1,
        "cuisine": 1
    }
);

//16.Escriba una consulta de MongoDB para encontrar el ID, el nombre, el municipio y la cocina del restaurante
// para aquellos restaurantes que contienen 'Reg' como tres letras en algún lugar de su nombre.

db.restaurants.find(
    { "name": /.*Reg.*/ },
    {
        "restaurant_id": 1,
        "name": 1, "borough": 1,
        "cuisine": 1
    }
);

//17. Escriba una consulta de MongoDB para encontrar los restaurantes que pertenecen 
//al municipio del Bronx y que prepararon platos estadounidenses o chinos.

db.restaurants.find(
    {
        "borough": "Bronx",
        $or: [
            { "cuisine": "American " },
            { "cuisine": "Chinese" }
        ]
    }
);

// 18. Escriba una consulta de MongoDB para encontrar la identificación del restaurante, el nombre, el municipio y la cocina de los restaurantes 
// que pertenecen al municipio de Staten Island o Queens o Bronxor Brooklyn.

db.restaurants.find(
    { "borough": { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } },
    {
        "restaurant_id": 1,
        "name": 1, "borough": 1,
        "cuisine": 1
    }
);

// 19 Escriba una consulta de MongoDB para encontrar el ID del restaurante,
// el nombre, el municipio y la cocina de aquellos restaurantes que no pertenecen 
//al municipio de Staten Island o Queens o Bronxor Brooklyn.

db.restaurants.find(
    { "borough": { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } },
    {
        "restaurant_id": 1,
        "name": 1, "borough": 1,
        "cuisine": 1
    }
);

// 20. Escriba una consulta de MongoDB para encontrar el ID del restaurante, el nombre, el municipio y la cocina de aquellos 
//restaurantes que obtuvieron una puntuación que no sea superior a 10.

db.restaurants.find(
    {
        "grades.score":
        {
            $not:
                { $gt: 10 }
        }
    },
    {
        "restaurant_id": 1,
        "name": 1, "borough": 1,
        "cuisine": 1
    }
);

// 21. Escriba una consulta de MongoDB para encontrar el ID del restaurante, el nombre, el municipio y la cocina de aquellos restaurantes que prepararon platos excepto 
//'Americano' y 'Chinees' o el nombre del restaurante comienza con la letra 'Wil'.

db.restaurants.find(
    {
        $or: [
            { name: /^Wil/ },
            {
                "$and": [
                    { "cuisine": { $ne: "American " } },
                    { "cuisine": { $ne: "Chinees" } }
                ]
            }
        ]
    }
    , { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 }
);


// 22 Escriba una consulta de MongoDB para encontrar el ID del restaurante, 
//el nombre y las calificaciones de los restaurantes que obtuvieron una calificación de "A" y obtuvieron una puntuación de 11 en un ISODate "2014-08-11T00: 00: 00Z" 
//entre muchas de las fechas de la encuesta.

db.restaurants.find(
    {
        "grades.date": ISODate("2014-08-11T00:00:00Z"),
        "grades.grade": "A",
        "grades.score": 11
    },
    { "restaurant_id": 1, "name": 1, "grades": 1 }
);


// 23 Escriba una consulta de MongoDB para encontrar el ID del restaurant
// el nombre y las calificaciones de aquellos restaurantes donde el segundo elemento de 
// la matriz de calificaciones contiene una calificación de "A" y una puntuación de 9 en un ISODate "2014-08-11T00: 00: 00Z".

db.restaurants.find(
    {
        "grades.1.date": ISODate("2014-08-11T00:00:00Z"),
        "grades.1.grade": "A",
        "grades.1.score": 9
    },
    { "restaurant_id": 1, "name": 1, "grades": 1 }
);

//24. Escriba una consulta de MongoDB para encontrar el ID del restaurante, el nombre, la dirección y la ubicación geográfica para aquellos restaurantes donde el segundo elemento
// de la matriz de coordenadas contiene un valor que sea más de 42 y hasta 52 ..

db.restaurants.find(
    {
        "address.coord.1": { $gt: 42, $lte: 52 }
    },
    { "restaurant_id": 1, "name": 1, "address": 1, "coord": 1 }
);

//25. Escriba una consulta de MongoDB para organizar el nombre de los restaurantes 
//en orden ascendente junto con todas las columnas.

db.restaurants.find().sort({ "name": 1 });

//26. Escriba una consulta de MongoDB para organizar el nombre de los restaurantes
// en orden descendente junto con todas las columnas.

db.restaurants.find().sort(
    { "name": -1 }
);

// 27. Escriba una consulta de MongoDB para organizar el nombre de la cocina en orden ascendente y
// para ese mismo distrito de cocina debe estar en orden descendente.

db.restaurants.find().sort(
    { "cuisine": 1, "borough": -1, }
);

//28. Escriba una consulta 
//de MongoDB para saber si todas las direcciones contienen la calle o no.

db.restaurants.find(
    {
        "address.street":
            { $exists: true }
    }
);

















