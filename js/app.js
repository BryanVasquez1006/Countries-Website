import data from "./data.js";
import dom from "./dom.js"
console.log(data.getData)

const URL = "https://restcountries.com/v3.1/all"
const datos = await data.getData(URL)
const countries = dom.$("#countryCards");
const countryFilter = document.getElementById("countryFilter")
console.log(countryFilter)

let countryName = "";


datos.forEach(element => {
    const card = dom.countryCard(element)

    //Agregando el card al elemento countryCard

    countries.appendChild(card)
})



countryFilter.addEventListener("keydown", (e) => {
    countryName = countryFilter.value;
    let enter = datos.filter(dato => dato.name.common.toLowerCase().includes(countryName.toLowerCase))
   console.log(enter)
    
})

// countryFilter.addEventListener()



