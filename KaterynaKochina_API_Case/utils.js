const filterCountries = (countries, filterSample) => {
    return countries.filter((country) => {
        const countryName = country.name?.common ?? ''
        return countryName.toLowerCase().includes(filterSample.toLowerCase())
    })
}

module.exports = {
    filterCountries
}