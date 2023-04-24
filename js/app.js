import data from "./data.js";
import dom from "./dom.js"


const URL = "https://restcountries.com/v3.1/all"
const datos = await data.getData(URL) //ESTA ES LA API Y TODA LA INFORMACION QUE TIENE EN ELLA 
const getCountries = data.getCountries(datos);
const countries = dom.$("#countryCards");
const countryFilter = document.getElementById("countryFilter")
const regionFilter = [...dom.$("#region").children]
console.log(regionFilter)
dom.showCards(datos)



//Añadir los eventos a cada elemento de categoria

regionFilter.forEach(region => {
    region.addEventListener("click", () => {
        
        //Filtrar por categoria
        let filtro = region.textContent;

        const filtered  = data.filtrar(datos,filtro)
        console.log(filtered)
        
    
    })
})






// let countryName = "";


// datos.forEach(element => {
//     const card = dom.countryCard(element)

//     //Agregando el card al elemento countryCard

//     countries.appendChild(card)
// })















countryFilter.addEventListener("keyup", (e) => {
    countryName = countryFilter.value;
    console.log(countryName)
})

countryFilter.addEventListener("submit", (e) => {
    let enter = datos
} )

// countryFilter.addEventListener()



