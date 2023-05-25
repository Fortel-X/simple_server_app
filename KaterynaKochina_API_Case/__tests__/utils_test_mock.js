const countriesMock = [
    {
        name: {
            common: 'Ukraine',
        },
        population: 44_134_693,
    },
    {
        name: {
            common: 'Poland',
        },
        population: 37_950_802,
    },
    {
        name: {
            common: 'United Kingdom of Great Britain and Northern Ireland',
        },
        population: 68_913_824,
    },
    {
        name: {
            common: 'France',
        },
        population: 65_689_669,
    },
    {
        name: {
            common: 'United States of America',
        },
        population: 336_602_623,
    },
    {
        name: {
            common: 'Portugal',
        },
        population: 10_111_179,
    },
]

const entriesWithUnSubstrCount = 2
const entriesWithLess50PopulationCount = 3
const ascOrderFirstCountryName = 'France'
const descOrderFirstCountryName = 'United States of America'

const countriesBadStructureMock = [
    {
        name: 'Ukraine'
    },
    {
        name: 'Poland'
    }
]

module.exports = {
    countriesMock,
    countriesBadStructureMock,
    entriesWithUnSubstrCount,
    entriesWithLess50PopulationCount,
    ascOrderFirstCountryName,
    descOrderFirstCountryName
}