
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('countries-container');


        data.forEach(country => {
            const countryCard = document.createElement('article');

            const countryFlag = document.createElement('img');
            countryFlag.src = country.flags.svg;
            countryFlag.alt = `${country.name.common} Flag`;

            const countryName = document.createElement('h2');
            countryName.textContent = country.name.common;

            countryCard.appendChild(countryFlag);
            countryCard.appendChild(countryName);

            container.appendChild(countryCard);
        });
    })
    .catch(error => {
        console.error('Error fetching countries:', error);
    });
