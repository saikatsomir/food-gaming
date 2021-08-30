const countryDetails = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
countryDetails()
const displayCountry = countries => {
    /*  for (const country of countries) {
         console.log(country)
     } */
    const countriesdiv = document.getElementById('country')
    countries.forEach(country => {
        // console.log(country.capital);
        const div = document.createElement('div')
        div.classList.add('country')
        const h3 = document.createElement('h3')
        div.innerHTML = `
        <h3>Country Name: ${country.name}</h3>
        <p>Capital Name: ${country.capital}</p>
        <button onclick="loadDetail('${country.name}')">Add Detail</button>
        `
        /*   h3.innerText = `
          Country Name: ${country.name}
          `
          div.appendChild(h3)
          const p = document.createElement('h4')
          p.innerText = `
          Capital Name: ${country.capital}
          `
          div.appendChild(p) */
        countriesdiv.appendChild(div)

    })
}


const loadDetail = name => {

    const url = ` https://restcountries.eu/rest/v2/name/${name} `
    fetch(url)
        .then(res => res.json())
        .then(data => countryDetail(data[0]))
}

const countryDetail = country => {
    const countryDiv = document.getElementById('country-detail')
    countryDiv.innerHTML = `
    <h5>${country.name}</h5>
    <p>Population: ${country.population}</p>
    <img src = "${country.flag}">
        `
}