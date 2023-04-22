import data from "./data.js";
import dom from "./dom.js"
console.log(data.getData)

const URL = "https://restcountries.com/v3.1/all"
const datos = await data.getData(URL)
const countries = dom.$("#countryCards")


datos.forEach(element => {
    const card = dom.countryCard(element)

    //Agregando el card al elemento countryCard

    countries.appendChild(card)
})