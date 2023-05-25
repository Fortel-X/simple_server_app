const ASC_ORDER = 'ascend'
const DESC_ORDER = 'descend'

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

const sortCountriesByName = (countries, order) => {
    return countries.sort((a, b) => {
        const countryAName = a.name?.common ?? ''
        const countryBName = b.name?.common ?? ''

        if (order === ASC_ORDER){
            if (countryAName > countryBName) return 1
            else if (countryAName < countryBName) return -1
            else return 0
        } else {
            if (countryAName < countryBName) return 1
            else if (countryAName > countryBName) return -1
            else return 0
        }
    })
}

module.exports = {
    ASC_ORDER,
    DESC_ORDER,
    filterCountriesByName,
    filterCountriesByPopulation,
    sortCountriesByName
}
