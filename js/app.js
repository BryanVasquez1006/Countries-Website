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
dom.showCards(datos)
dom.offCanvas(datos)

darkMode.addEventListener("click", () => {
    html.dataset.bsTheme = html.dataset.bsTheme === "dark" ? "light" : "dark"
})


let byCountry = "";

countryInput.addEventListener("keyup", (e) => {
   byCountry = countryInput.value;
   let enter = datos.filter(dato => dato.name.common.toLowerCase().includes(byCountry.toLowerCase()))
    dom.showCards(enter)
    console.log(enter)
   
})
