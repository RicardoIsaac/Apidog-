const { Router } = require('express');
const { Dog, TempDog } = require('../../db');
const express = require('express');
const getAllDogs = require("./getalldogs")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//-- Get data from the database posgrest--//


//////////////////////////////////////////////////////////
router.get("/", async (req, res) => {
    const { name } = req.query;
    const allDogs = await getAllDogs();
    if (name) {
        const dog = allDogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
        res.status(200).send(dog)
    } else {
        res.status(200).send(allDogs);
    }
});

router.post("/create", async (req, res) => {
    let { name, min_height, max_height, min_weight, max_weight, life_span,createdInDb, temperaments, } = req.body
 
    function getImage(){
        var images=[
    image1 = "https://c.tenor.com/80_U-ViLG5EAAAAd/perro-dibujado-bailando-perrodibujo.gif",
    image2 = "https://c.tenor.com/0gKQdjnZDLkAAAAd/dog-funny-dog.gif",
    image3 = "https://c.tenor.com/T4W-AtAUegYAAAAd/byuntear-sad-dog.gif",
    image4 = "https://c.tenor.com/ISsgBwnD3bYAAAAC/doggie-dance-dancing.gif",
    image5 = "https://c.tenor.com/OjqDT0J2SiwAAAAd/perros-cute-muy-cute.gif"]
      
         let imge = Math.floor(Math.random() * 5)
      
        return images[imge]
      }
    let fixedHeight = []
    let minHeight = min_height;
    let maxHeight = max_height;
    fixedHeight.push(minHeight, maxHeight)

    let fixedWeight = []
    let minWeight = min_weight;
    let maxWeight = max_weight;
    fixedWeight.push(minWeight, maxWeight)

    let dog = await Dog.create({
        name,
        height: fixedHeight,
        weight: fixedWeight,
        life_span,
        image:getImage(),
        createdInDb
    })
    
        let associatedTemp = await TempDog.findAll({
            where: { name: temperaments},
        })
    
    dog.addTempDog(associatedTemp);

    res.status(200).send(dog)
})

router.get("/:idRaza", async (req, res) => {
    const { idRaza } = req.params;
    const allDogs = await getAllDogs();
    const dog = allDogs.filter(el => el.id == idRaza);
    if (dog.length) {
        res.status(200).json(dog);
    } else {
        res.status(404).send("Dog no found in the Data");
    }
});















module.exports = router