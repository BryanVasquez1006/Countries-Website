import data from "./data.js";
import dom from "./dom.js"


const URL = "https://restcountries.com/v3.1/all"
const datos = await data.getData(URL) //ESTA ES LA API Y TODA LA INFORMACION QUE TIENE EN ELLA 
const getCountries = data.getCountries(datos);
const countries = dom.$("#countryCards");
const countryInput = document.getElementById("countryInput")
const regionFilter = [...dom.$("#region").children]
const searchIcon = document.getElementById("buscar")
const html = document.getElementById("html")
const darkMode = document.getElementById("darkModeBtn")
console.log(html, darkMode)
dom.showCards(datos)
dom.offCanvas(datos)

darkMode.addEventListener("click", () => {
    html.dataset.bsTheme = html.dataset.bsTheme === "dark" ? "light" : "dark"
})


// AGREGANDO EL EVENTO KEYUP AL INPUT
let byCountry = "";

countryInput.addEventListener("change", (e) => {
   byCountry = countryInput.value;
   let enter = datos.filter(dato => dato.name.common.toLowerCase().includes(byCountry.toLowerCase()))
    dom.showCards(enter)
    console.log(enter)
   
})


// REGION FILTER
regionFilter.forEach(region => {
    region.addEventListener("click", () => {
        
        //Filtrar por categoria
        let filtro = region.textContent;

        const filtered  = filtro === "All" ? datos : data.filtrar(datos,filtro)
        
        dom.showCards(filtered)
    })
})
















// let countryName = "";


// datos.forEach(element => {
//     const card = dom.countryCard(element)

//     //Agregando el card al elemento countryCard

//     countries.appendChild(card)
// })



// //Añadir los eventos a cada elemento de la region

// regionFilter.forEach(region => {
//     region.addEventListener("click", () => {
        
//         //Filtrar por categoria
//         let filtro = region.textContent;

//         const filtered  = data.filtrar(datos,filtro)
//         console.log(filtered)
        
        
        
    
//     })
// })











// countryFilter.addEventListener()



