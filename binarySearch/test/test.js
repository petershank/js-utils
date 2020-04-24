var assert = require('assert')
var primes = require('../../primes.js')

describe('getPrimes', function () {
  it('generates prime numbers correctly', function (done) {
    assert.deepStrictEqual(primes.getPrimes(2), [2])
    assert.deepStrictEqual(primes.getPrimes(3), [2, 3])
    assert.deepStrictEqual(primes.getPrimes(4), [2, 3])
    assert.deepStrictEqual(primes.getPrimes(5), [2, 3, 5])
    assert.deepStrictEqual(primes.getPrimes(6), [2, 3, 5])
    assert.deepStrictEqual(primes.getPrimes(7), [2, 3, 5, 7])
    assert.deepStrictEqual(primes.getPrimes(8), [2, 3, 5, 7])
    assert.deepStrictEqual(primes.getPrimes(9), [2, 3, 5, 7])
    assert.deepStrictEqual(primes.getPrimes(10), [2, 3, 5, 7])
    assert.deepStrictEqual(primes.getPrimes(11), [2, 3, 5, 7, 11])
    assert.deepStrictEqual(primes.getPrimes(12), [2, 3, 5, 7, 11])
    assert.deepStrictEqual(primes.getPrimes(1000)[167], 997)
    done()
  })
})

describe('binarySearch', function () {
  it('generates prime numbers correctly', function (done) {
    assert.deepStrictEqual(2,2)
    done()
  })
})