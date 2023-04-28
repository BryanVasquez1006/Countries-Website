const $ = (selector) => document.querySelector(selector);
const countries = $("#countryCards");
const offcanvasContainer = document.getElementById("countryCardCanvas")




const countryCard = (obj) => {
    const div = document.createElement("div")
    div.className = "countryCard prueba";
    div.id = obj.name.common;

    //INSERTANDO LOS ELEMENTOS DEL CARD

    div.innerHTML = `
    <div class="col container mt-5 "  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop d-flex justify-content-center justify-content-evenly">
        <div class=" card border-0 bg-body-tertiary flagPhoto ">
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

    // let [moneda] = Object.keys(obj.currencies)
    // let [languages] = Object.keys(obj.languages)

    div.innerHTML = `
    <div class="countryCardCanvas container mt-5">
        <div class = "row" > 
           <div class = " col-md-6 ">
             <img src="${obj.flags.svg}" class="card-img-top" alt="${obj.flags.alt}">
           </div>
            <div class="card-body col-md-4">

                <div class = "col-md-6">
                    <div class = "d-md-flex flex-row justify-content-evenly">
                            <div class = "gap-5">                        
                            <h2>${obj.name.common}</h2>
                            <p class="fw-bold">Native Name: ${obj.name.common}</p>
                            <p class="fw-bold">Population: ${obj.population.toLocaleString("en-US")}</p>
                            <p class="fw-bold">Region: ${obj.region} </p>
                            <p class="fw-bold">Sub Region: ${obj.subregion}</p>
                            <p class="fw-bold">Capital: ${obj.capital}</p>
                            </div> 
                            <div class = "ms-lg-5">  
                            <div class="middleInfo mt-5">
                            <p class = "fw-bold">Top Level Domain:</p>
                            <p class = "fw-bold">Currencies:</p>
                            <p class = "fw-bold">Languages:</p>
                            </div> 
                       </div> 
                    </div>
                     
                    <div class="lastInfo mt-5 d-md-flex container">
                        <h5 class = "pe-3 text-nowrap">Border Countries:</h5>

                        <div class="countrySuggestions d-flex  flex-row gap-3">
                            <div class="borderCountries p-1 border-dark border-2 bg-body-tertiary">France</div>
                            <div class="borderCountries p-1 border-dark border-2 bg-body-tertiary">Nether</div>
                            <div class="borderCountries p-1 border-dark border-2 bg-body-tertiary">Germany<div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

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
    offCanvas,
    offcanvasContainer
}

