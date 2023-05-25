const express = require('express')
const axios = require('axios')
const { filterCountriesByName, filterCountriesByPopulation } = require('./utils')

const app = express()
const port = 3000

app.get('/list', async (req, res) => {
    const { a, population, name } = req.query

    if (a && !Number(a) || population && !Number(population)) {
        console.log('Wrong parameter type')
        res.status(400).send('Wrong parameter type')
    }

    const countriesFetch = await axios.get('https://restcountries.com/v3.1/all')
    let countries = countriesFetch.data
    countries = name ? filterCountriesByName(countries, name) : countries
    countries = population ? filterCountriesByPopulation(countries, population) : countries

    res.status(200).send(countries)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
