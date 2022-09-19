const { Router } = require('express');
const axios = require ('axios')
const {Pokemon, Type} = require('../db')

const router = Router();

var p1 = 'sprites'
var p2 = 'other'
var p3 = 'official-artwork'

const getApiInfo = async () => {
    const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40')
    const apiInfo = await apiUrl.data.results
    let pokemons = await Promise.all (
     apiInfo.map(async (e) => {
            if (e.url) {
                const pokemonInfo = await axios.get(`${e.url}`)
                const thisPokemon = await pokemonInfo.data
                return {
                    id: thisPokemon.id,
                    name: thisPokemon.name,
                    types: thisPokemon.types.map(e => e.type.name),
                    hp: thisPokemon.stats[0].base_stat,
                    attack: thisPokemon.stats[1].base_stat,
                    defense: thisPokemon.stats[2].base_stat,
                    speed: thisPokemon.stats[5].base_stat,
                    height: thisPokemon.height,
                    weight: thisPokemon.weight,
                    image: `${thisPokemon[p1][p2][p3].front_default}`
                }               
            }        
        })
    )        
    return pokemons
}



router.get('/pokemons', async (req, res) => {
    let pokemonsTotales = await getApiInfo()
        res.status(200).send(pokemonsTotales)
})



module.exports = router;