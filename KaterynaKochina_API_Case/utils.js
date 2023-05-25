const filterCountriesByName = (countries, nameSample) => {
    return countries.filter((country) => {
        const countryName = country.name?.common ?? ''
        return countryName.toLowerCase().includes(nameSample.toLowerCase())
    })
}

const filterCountriesByPopulation = (countries, populationInMillions) => {
    const population = populationInMillions * 1_000_000
    return countries.filter((country) => {
        const countryPopulation = country.population
        return countryPopulation && countryPopulation < population
    })
}

module.exports = {
    filterCountriesByName,
    filterCountriesByPopulation
}
