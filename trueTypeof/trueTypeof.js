const trueTypeOf = function (obj) {
  "use strict";

  return Object.prototype.toString.call(obj).slice(8, -1);
};

module.exports.trueTypeOf = trueTypeOf;
