const { Router } = require('express');
const { Dog, TempDog } = require('../../db');
const express = require('express');
const getAllDogs=require("./getalldogs")
const axios = require('axios');

const router = Router();
router.get("/", async (req, res) => {
    const temperamentsApi = await axios.get(`https://api.thedogapi.com/v1/breeds`);
    const temperaments = temperamentsApi.data.map(t => t.temperament);
    const temps = temperaments.toString().split(",");
    temps.forEach(el => {
        let i = el.trim()
        TempDog.findOrCreate({
             where: { name: i }
        })
    })

    const allTemp = await TempDog.findAll();    
    res.send(allTemp);
});

module.exports=router