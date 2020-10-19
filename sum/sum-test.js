const assert = require('assert')
const sum = require('./sum')

test('should add two numbers', () => {
        assert.strictEqual(sum(2, 3), 5)
})
