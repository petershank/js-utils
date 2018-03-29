var assert = require('assert');

var calc = require('../calc.js');
var primes = require('../primes.js');

// Tests are hierarchical. Here we define a test suite for our calculator.
describe('Calculator Tests', function() {
	// And then we describe our testcases.
	it('returns isPrime(2) = true', function(done) {
		assert.equal(primes.isPrime(2), true);
		// Invoke done when the test is complete.
		done();
	});

	it('returns isPrime(1) = false', function(done) {
		assert.equal(primes.isPrime(2), false);
		// Invoke done when the test is complete.
		done();
	});

	it('returns 2*2=4', function(done) {
		assert.equal(calc.mul(2, 2), 4);
		// Invoke done when the test is complete.
		done();
	});
	it('returns 1+1=2', function(done) {
		assert.equal(calc.add(1, 1), 2);
		// Invoke done when the test is complete.
		done();
	});

	it('returns 2*2=4', function(done) {
		assert.equal(calc.mul(2, 2), 4);
		// Invoke done when the test is complete.
		done();
	});
});
