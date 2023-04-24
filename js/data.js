// MANIPULACION DE LOS DATOS

const getData  = async (URL) => {
    return fetch(URL)
    .then (response => response.json())
    .then (response => response)
    .catch(error => error);

};


const getCountries  = (data) => {
    let countries  = data.map(elem => `${elem.name.common}`)
     countries = new Set(countries);
     countries = [...countries]
     return countries
    
}

const filtrar = (arr, filtro) => {
   let filtered = arr.filter(elem => elem.name.common === filtro)
   return filtered;
}


export default {
    getData,
    getCountries,
    filtrar
}

