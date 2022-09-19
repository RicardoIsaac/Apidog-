const axios = require("axios")
const { Cat, TempCat } = require("../../db")

let urLink = "https://api.thecatapi.com/v1/breeds"

const getApiData2 = async () => {
    const apiData = await axios.get(urLink)
    const apiInfo = await apiData.data.map(el => {
        let temperamentArray = [];
        if (el.temperament) {
            temperamentArray = el.temperament.split(", ");
        }
        let weightArray = [];
        if (el.weight.metric) {
            weightArray = el.weight.metric.split(" - ");
        }
        return {
            id: el.id,
            name: el.name,
            origin: el.origin,
            weight: weightArray,
            temperaments: temperamentArray,
            life_span: el.life_span,
            image: el.image,
        }

    })
    return apiInfo
}

const getFromDb2 = async () => {
    return await Cat.findAll({
        include: {
            model: TempCat,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
}

const getAllCats = async () => {
    const dataFromApi2 = await getApiData2();
    const dataFromDb2 = await getFromDb2();
    const allDataMixed2 = [...dataFromApi2, ...dataFromDb2]
    return allDataMixed2
}

module.exports = getAllCats