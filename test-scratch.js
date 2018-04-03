var assert = require('assert')
var scratch = require('./scratch.js')

describe('add1', function () {
  it('should return 1+1=2', function (done) {
    assert.equal(scratch.add1(1), 2)
    done()
  })
})
