const { Router } = require("express")
const { Cat, TempCat } = require("../../db")
const Dog = require("../../models/Dogs/Dog")
const getAllCats = require("./getallcats")
const router = Router()

///////////////////////////////
router.get("/", async (req, res) => {
    const { name } = req.query
    const allCats = await getAllCats();
    if (name) {
        const cat = allCats.filter(d => d.name.toLowerCase().includes(name.toLowerCase()))
        res.status(200).send(cat)
    } else {
        res.status(200).send(allCats)
    }
})
////////////////////////////
router.post("/create", async (req, res) => {
    let { name,
        origin,
        weight,
        life_span,
        createdInDb,
        temperament } = req.body

    function getImage() {
        var images = [
            images1 = "https://i.pinimg.com/originals/9d/f0/ba/9df0bae2fe2d7f829071f4a17b0dc832.jpg",
            images2 = "https://i.pinimg.com/736x/38/c9/dd/38c9dd3526db7a207c45c9330fc2cfb7.jpg",
            images3 = "https://i.pinimg.com/originals/9e/f0/d4/9ef0d4053af977b402417de0fdab616b.jpg",
            images4 = "https://cdn.shopify.com/s/files/1/0265/2753/1060/products/THEQUEENCUSTOMPETPORTRAIT_05f52d89-c33b-43cc-a09d-e275bc895fa6_400x.jpg?v=1603986678",
            images5 = "https://cdn.shopify.com/s/files/1/0265/2753/1060/products/THEQUEENCUSTOMPETPORTRAIT2_400x.jpg?v=1599388615",
        ]

        let imge = Math.floor(Math.random() * 5)

        return images[imge]

    }
    try {
        const newCat = await Cat.create({
            name,
            origin,
            weight,
            life_span,
            createdInDb,
            image: getImage()
        })

        let associatedTemp=await TempCat.findAll({
            where:{name:temperament}
        })
        newCat.addTempCat(associatedTemp)
        res.status(200).send(newCat)


    } catch (error) {
        res.status(400).send(error)
    }

})
////////////////////////////

router.get("/:idRaza", async (req, res) => {
    const { idRaza } = req.params;
   const allCats= await getAllCats()
   const cat= allCats.filter(el=>el.id==idRaza)
    if(cat.length){
        res.status(200).json(cat)
    }else{
        res.status(404).send("Cat not found in the data")
    }

});


module.exports = router