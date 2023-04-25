const $ = (selector) => document.querySelector(selector);
const countries = $("#countryCards");
const offcanvasContainer = document.getElementById("countryCardCanvas")
console.log(offcanvasContainer)

const countryCard = (obj) => {
    const div = document.createElement("div")
    div.className = "countryCard"

    //INSERTANDO LOS ELEMENTOS DEL CARD

    div.innerHTML = `
    <div class="col  countryCard container mt-5 "  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop d-flex justify-content-center justify-content-evenly" id = ${obj.name.common}>
        <div class="card border-0 bg-body-tertiary flagPhoto ">
                <div class = "flagPhoto">
                    <img src="${obj.flags.svg}" class="card-img-top" alt="${obj.flags.alt}">
                </div>
            <div class="card-body">

                <h2>${obj.name.common}</h2>

                <p class="fw-bold">Population: ${obj.population.toLocaleString("en-US")}</p>
                <p class="fw-bold">Region: ${obj.region}</p>
                <p class="fw-bold">Capital: ${obj.capital}</p>
            </div>
        </div>
  </div>
    `
// console.log(div)
   return div;
}






const offcanvasCard = (obj) => {
    const div = document.createElement("div")
    div.className = "countryCardCanvas"
    

    div.innerHTML = `
    <div class="countryCardCanvas container mt-5 ">
             
                <img src="${obj.flags.svg}" class="card-img-top" alt="${obj.flags.alt}">

                <div class="card-body">
                  
                  <h2>${obj.name.common}</h2>
                  <p class="fw-bold">Native Name:</p>
                  <p class="fw-bold">Population: ${obj.population.toLocaleString("en-US")}</p>
                  <p class="fw-bold">Region: ${obj.region} </p>
                  <p class="fw-bold">Sub Region: ${obj.subregion}</p>
                  <p class="fw-bold">Capital: ${obj.capital}</p>

                  <div class="middleInfo mt-5">
                    <p class = "fw-bold">Top Level Domain:</p>
                    <p class = "fw-bold">Currencies:</p>
                    <p class = "fw-bold">Languages:</p>
                  </div>

                  <div class="lastInfo mt-5">
                    <h5>Border Countries:</h5>

                    <div class="countrySuggestions d-flex justify-content-evenly text-center">
                        <div class="borderCountries p-1 border border-black">France</div>
                        <div class="borderCountries p-1 border border-black">Nether</div>
                        <div class="borderCountries p-1 border border-black">Germany<div>
                    </div>
                
                  </div>
                

                </div>
              </div>
            </div>
      

       
      </div>
    `
  console.log(div)
    return div
}















//MOSTRAR LAS CARDS EN PANTALLA
const showCards = (arr) => {

        countries.innerHTML = ""

    arr.forEach(element => {
        const card = countryCard(element)
    
        //Agregando el card al elemento countryCard
    
        countries.appendChild(card)
    })
    
}

//MOSTRAR LAS CARDS EN OFF CANVAS 
const offCanvas = (arr) => {

    offcanvasContainer.innerHTML = ""

arr.forEach(element => {
    const card = offcanvasCard(element)

    //Agregando el card al elemento countryCard

    offcanvasContainer.appendChild(card)
})

}



export default {
    countryCard,
    $,
    showCards,
    offcanvasCard,
    offCanvas
}

