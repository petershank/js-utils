'use strict'

const addemup = require('./scratch.js')

var assert = require('assert')
//  var describe = require('mocha').describe
// var describe = require('mocha').
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1)
    })
    it('should return -1 when the value is not present', function () {
      assert.equal(addemup.add1(4), 5)
    })
  })
})
