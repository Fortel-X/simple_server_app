const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

app.get('/list', async (req, res) => {
    const { a, b, c } = req.query

    if (a && !Number(a) || b && !Number(b)) {
        console.log('Wrong parameter type')
        res.status(400).send('Wrong parameter type')
    }

    console.log(`a: ${a}, b: ${b}, c: ${c}`)

    const response = await axios.get('https://restcountries.com/v3.1/all')
    const json = await response.json()

    console.log(json)

    res.status(200).send('Hello World!!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})