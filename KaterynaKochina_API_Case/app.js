const express = require('express')
const axios = require('axios')
const { filterCountries } = require('./utils')

const app = express()
const port = 3000

app.get('/list', async (req, res) => {
    const { a, b, name } = req.query

    if (a && !Number(a) || b && !Number(b)) {
        console.log('Wrong parameter type')
        res.status(400).send('Wrong parameter type')
    }

    const countriesFetch = await axios.get('https://restcountries.com/v3.1/all')
    let countries = countriesFetch.data
    countries = name ? filterCountries(countries, name) : countries

    res.status(200).send(countries)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
