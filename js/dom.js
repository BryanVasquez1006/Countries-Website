const $ = (selector) => document.querySelector(selector);
const countries = $("#countryCards");

const countryCard = (obj) => {
    const div = document.createElement("div")
    div.className = "countryCard"

    //INSERTANDO LOS ELEMENTOS DEL CARD

    div.innerHTML = `
    <div class="col  countryCard container mt-5 "  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop ">
        <div class="card border-0 bg-body-tertiary flagPhoto ">
            <div class = "flagPhoto">
                <img src="${obj.flags.svg}" class="card-img-top" alt="${obj.flags.alt}">
            </div>
        <div class="card-body">

            <h2>${obj.name.common}</h2>

            <p class="fw-bold">Population: ${obj.population}</p>
            <p class="fw-bold">Region: ${obj.region}</p>
            <p class="fw-bold">Capital: ${obj.capital}</p>
        </div>
    </div>
  </div>
    `
    
   return div;
}


const showCards = (arr) => {

        countries.innerHTML = ""

    arr.forEach(element => {
        const card = countryCard(element)
    
        //Agregando el card al elemento countryCard
    
        countries.appendChild(card)
    })
    
}



export default {
    countryCard,
    $,
    showCards
}

