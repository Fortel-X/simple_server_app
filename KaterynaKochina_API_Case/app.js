const express = require('express')
const axios = require('axios')
const { filterCountriesByName, filterCountriesByPopulation, sortCountriesByName, countriesSlice, ASC_ORDER, DESC_ORDER } = require('./utils')

const app = express()
const port = 3000

app.get('/list', async (req, res) => {
    const { limit, population, name, order } = req.query

    if (limit && !Number(limit) || population && !Number(population) || order && ![ASC_ORDER, DESC_ORDER].includes(order)) {
        console.log('Wrong parameter type')
        res.status(400).send('Wrong parameter type')
    }

    const countriesFetch = await axios.get('https://restcountries.com/v3.1/all')
    let countries = countriesFetch.data
    countries = name ? filterCountriesByName(countries, name) : countries
    countries = population ? filterCountriesByPopulation(countries, population) : countries
    countries = order ? sortCountriesByName(countries, order) : countries
    countries = limit ? countriesSlice(countries, limit) : countries

    res.status(200).send(countries)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
