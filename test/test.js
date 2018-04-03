var assert = require('assert')
var check = require('check-types')
var primes = require('../primes.js')

describe('Tests for the "check-types" validation library', function () {
  it('recognizes a string', function (done) {
    var myString = 'foo'
    assert.equal(check.string(myString), true)
    done()
  })

  it('throws error on string input', function (done) {
    assert.throws(function () { primes.getPiFunction('foo') }, Error)
    done()
  })

  it('throws error on integers less than 2', function (done) {
    assert.throws(function () { primes.getPrimes(1) }, Error)
    done()
  })
})

describe('Tests of the primes functions', function () {
  it('returns isPrime(2) = true', function (done) {
    assert.equal(primes.isPrime(2), true)
    done()
  })

  it('returns isPrime(1) = false', function (done) {
    assert.equal(primes.isPrime(1), false)
    done()
  })
})
