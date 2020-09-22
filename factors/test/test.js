// const chai = require('chai')

// 

var expect = require("chai").expect;
var assert = require('assert')
var factors = require('../factors.js')

describe('factors', function () {
  it('returns an clarray', function (done) {
    assert.deepStrictEqual(Array.isArray(factors(2)), true)
    done()
  }),
  it('calculates factors correctly', function (done) {
    expect(factors(2)).to.deep.equal([2])
    expect(factors(3)).to.deep.equal([3])
    expect(factors(4)).to.deep.equal([2,2])
    expect(factors(5)).to.deep.equal([5])
    expect(factors(6)).to.deep.equal([2,3])
    expect(factors(7)).to.deep.equal([7])
    expect(factors(8)).to.deep.equal([2,2,2])
    expect(factors(9)).to.deep.equal([3,3])
    expect(factors(10)).to.deep.equal([2,5])
    expect(factors(11)).to.deep.equal([11])
    expect(factors(73)).to.deep.equal([73])
    done()
  })
})

// factors(3).should.be.a.Array
