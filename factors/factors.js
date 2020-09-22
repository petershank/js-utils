'use strict'

const primes  = require('primes')

function factors (n) {
    'use strict'
    const factors = []
    const candidates = primes(Math.floor(Math.sqrt(n)))
    while ( candidates.length > 0 ) {
        while ( n % candidates[0] === 0 ) {
            factors.push(candidates[0])
            n = n / candidates[0]
            if ( n === 1 ) {
                return factors
            }
        }
        candidates.shift()
        // console.log(candidates)
    }
    factors.push(n)
    return factors
}

module.exports = factors
