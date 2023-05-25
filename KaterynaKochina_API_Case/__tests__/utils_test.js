(function(){
    'use strict'
    const { testCase,it, assert } = require('./test')
    const { filterCountriesByName, filterCountriesByPopulation, sortCountriesByName, countriesSlice, ASC_ORDER, DESC_ORDER } = require('./../utils')
    const {
        countriesMock,
        countriesBadStructureMock,
        entriesWithUnSubstrCount,
        entriesWithLess50PopulationCount,
        ascOrderFirstCountryName,
        descOrderFirstCountryName
    } = require('./utils_test_mock')

    testCase('Filter by name function:', () => {
        it('should filter countries list', () => {
            const filterSample = 'Un'
            const res = filterCountriesByName(countriesMock, filterSample)

            assert(res.length === entriesWithUnSubstrCount)
        })

        it('should not be case sensitive', () => {
            const filterSample_1 = 'u'
            const filterSample_2 = 'u'
            const res_1 = filterCountriesByName(countriesMock, filterSample_1)
            const res_2 = filterCountriesByName(countriesMock, filterSample_2)

            assert(res_1.length === res_2.length)
        })

        it('should return an empty arr if no convenient entries was found', () => {
            const filterSample = 'zZZzzz'
            const res = filterCountriesByName(countriesMock, filterSample)

            assert(res.length === 0)
        })

        it('should return an empty arr if data sample with bad structure was provided', () => {
            const filterSample = 'U'
            const res = filterCountriesByName(countriesBadStructureMock, filterSample)

            assert(res.length === 0)
        })
    })

    testCase('Filter by population function:', () => {
        it('should filter countries list', () => {
            const filterSample = 50
            const res = filterCountriesByPopulation(countriesMock, filterSample)

            assert(res.length === entriesWithLess50PopulationCount)
        })

        it('should return an empty arr if no convenient entries was found', () => {
            const filterSample = 1
            const res = filterCountriesByPopulation(countriesMock, filterSample)

            assert(res.length === 0)
        })

        it('should return an empty arr if data sample with bad structure was provided', () => {
            const filterSample = 50
            const res = filterCountriesByPopulation(countriesBadStructureMock, filterSample)

            assert(res.length === 0)
        })
    })

    testCase('Sort by name function:', () => {
        it('should sort countries ascending', () => {
            const res = sortCountriesByName(countriesMock, ASC_ORDER)

            assert(res[0].name.common === ascOrderFirstCountryName)
        })

        it('should sort countries descending', () => {
            const res = sortCountriesByName(countriesMock, DESC_ORDER)

            assert(res[0].name.common === descOrderFirstCountryName)
        })
    })

    testCase('Slice countries function:', () => {
        it('should return n first entries', () => {
            const n = 3
            const res = countriesSlice(countriesMock, n)

            let isMatch = res.every((country, index) => {
                if (country.name.common !== countriesMock[index].name.common) {
                    return false
                }
                return true
            })
            assert(res.length === n && isMatch)
        })

        it('should return full list if n bigger than data sample length', () => {
            const n = countriesMock.length + 1
            const res = countriesSlice(countriesMock, n)

            assert(res.length === countriesMock.length)
        })
    })
})()