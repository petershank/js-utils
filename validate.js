'use strict'

const trueTypeOf = function (obj) {
	return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

module.exports.trueTypeOf = trueTypeOf
