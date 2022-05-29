var assert = require("assert");
var primes = require("../primes/primes.js");
var validate = require("../validate.js");

describe("getPrimes", function () {
  it("generates prime numbers correctly", function (done) {
    assert.deepStrictEqual(primes.getPrimes(2), [2]);
    assert.deepStrictEqual(primes.getPrimes(3), [2, 3]);
    assert.deepStrictEqual(primes.getPrimes(4), [2, 3]);
    assert.deepStrictEqual(primes.getPrimes(5), [2, 3, 5]);
    assert.deepStrictEqual(primes.getPrimes(6), [2, 3, 5]);
    assert.deepStrictEqual(primes.getPrimes(7), [2, 3, 5, 7]);
    assert.deepStrictEqual(primes.getPrimes(8), [2, 3, 5, 7]);
    assert.deepStrictEqual(primes.getPrimes(9), [2, 3, 5, 7]);
    assert.deepStrictEqual(primes.getPrimes(10), [2, 3, 5, 7]);
    assert.deepStrictEqual(primes.getPrimes(11), [2, 3, 5, 7, 11]);
    assert.deepStrictEqual(primes.getPrimes(12), [2, 3, 5, 7, 11]);
    assert.deepStrictEqual(primes.getPrimes(1000)[167], 997);
    done();
  });
});

describe("trueTypeOf", function () {
  it("returns accurate and intuitive type strings", function (done) {
    assert.strictEqual(validate.trueTypeOf(-1), "number");
    assert.strictEqual(validate.trueTypeOf(0), "number");
    assert.strictEqual(validate.trueTypeOf(1), "number");
    assert.strictEqual(validate.trueTypeOf(1.1), "number");
    assert.strictEqual(validate.trueTypeOf(1.2e3), "number");
    assert.strictEqual(validate.trueTypeOf(""), "string");
    assert.strictEqual(validate.trueTypeOf(""), "string");
    assert.strictEqual(validate.trueTypeOf("foo"), "string");
    assert.strictEqual(validate.trueTypeOf("foo"), "string");
    assert.strictEqual(validate.trueTypeOf("resumé"), "string");
    assert.strictEqual(validate.trueTypeOf("resumé"), "string");
    assert.strictEqual(validate.trueTypeOf([]), "array");
    assert.strictEqual(validate.trueTypeOf([2]), "array");
    assert.strictEqual(validate.trueTypeOf([2, 3]), "array");
    assert.strictEqual(validate.trueTypeOf(true), "boolean");
    assert.strictEqual(validate.trueTypeOf(false), "boolean");
    assert.strictEqual(validate.trueTypeOf({}), "object");
    assert.strictEqual(validate.trueTypeOf({ name: "Ringo" }), "object");
    assert.strictEqual(validate.trueTypeOf(null), "null");
    assert.strictEqual(validate.trueTypeOf(undefined), "undefined");
    done();
  });
});
