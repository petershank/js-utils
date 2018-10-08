const trueTypeOf = function (obj) {
	return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

console.log('trueTypeOf(1): ' + trueTypeOf(1))

module.exports.trueTypeOf = trueTypeOf
