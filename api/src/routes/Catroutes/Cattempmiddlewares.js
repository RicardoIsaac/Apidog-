const { Router}=require("express")
const {TempCat}= require("../../db")
const axios =require("axios")
const router=Router()

router.get("/", async (req, res) => {
    const temperamentsApi = await axios.get(`https://api.thecatapi.com/v1/breeds`);
    const temperaments = temperamentsApi.data.map(t => t.temperament);
    const temps = temperaments.toString().split(",");
    temps.forEach(el => {
        let i=el.trim()
        TempCat.findOrCreate({
            where: {name:i}
        })
    });
    const allTemp= await TempCat.findAll();
    res.send(allTemp)
})







module.exports=router