const axios = require('axios');
const { Dog, TempDog } = require('../../db');

let urLink = `https://api.thedogapi.com/v1/breeds`

const getApiData = async () => {

    const apiData = await axios.get(urLink);
    const apiInfo = await apiData.data.map(el => {
        let temperamentArray = [];
        if (el.temperament) {
            temperamentArray = el.temperament.split(", ");
        }

        let heightArray = [];
        if (el.height.metric) {
            heightArray = el.height.metric.split(" - ");
        }

        let weightArray = [];
        if (el.weight.metric) {
            weightArray = el.weight.metric.split(" - ");
        }
        return {
            id: el.id,
            name: el.name,
            height: heightArray,
            weight: weightArray,
            temperaments: temperamentArray,
            life_span: el.life_span,
            image: el.image.url,
        }
    })
    return apiInfo;
}
const getFromDb = async () => {
    return await Dog.findAll({
        include: {
            model: TempDog,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
};
const getAllDogs = async () => {
    const dataFromApi = await getApiData();
    const dataFromDb = await getFromDb();
    const allDataMixed = [...dataFromApi, ...dataFromDb];
    return allDataMixed;
}

module.exports = getAllDogs