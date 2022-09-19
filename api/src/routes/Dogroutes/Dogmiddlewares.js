const { Router } = require('express');
const { Dog, TempDog } = require('../../db');
const getAllDogs = require("./getalldogs")
const router = Router();


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
    let { name,
        height,
        weight,
        life_span,
        createdInDb,
        temperament } = req.body

    function getImage() {
        var images = [
            image1 = "https://pbs.twimg.com/media/D1T-XoNXcAAAyyX.jpg",
            image2 = "https://static.boredpanda.com/blog/wp-content/uploads/2020/01/dog-cat-knights-art-ponkichi-5e0c92afc9e53__700.jpg",
            image3 = "https://i.etsystatic.com/13144415/r/il/41602a/1947020701/il_570xN.1947020701_aprt.jpg",
            image4 = "https://c.tenor.com/ISsgBwnD3bYAAAAC/doggie-dance-dancing.gif",
            image5 = "https://cdn.shopify.com/s/files/1/0420/1801/3336/products/9m_1024x1024@2x.jpg?v=1619601716"]

        let imge = Math.floor(Math.random() * 5)

        return images[imge]
    }

    try {
        const newDog = await Dog.create({
            name,
            height,
            weight,
            life_span,
            image: getImage(),
            createdInDb
        })
    
        let associatedTemp = await TempDog.findAll({
            where: { name: temperament },
        })

        newDog.addTempDog(associatedTemp);

        res.status(200).send(newDog)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/:idRaza", async (req, res) => {
    const { idRaza } = req.params;
    const allDogs = await getAllDogs();
    const dog = allDogs.filter(el => el.id == idRaza);
    if (dog.length) {
        res.status(200).json(dog);
    } else {
        res.status(404).send("Dog not found in the Data");
    }
});

module.exports = router