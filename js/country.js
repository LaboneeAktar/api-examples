const loadCouontries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');
    // for (const country of countries) {
    // console.log(countries);

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Country Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : "No Capital"}</p>
            <button onclick= "loadCouontryDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCouontryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('Get country details', code);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    console.log(country);
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <h3>Details: ${country.name.common}</h3>
        <img src=" ${country.flags.png}">
    `;
}

loadCouontries();