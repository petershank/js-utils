// a collection of javascript helper functions
  function getPrimes(n) {
    var max = n;
    var integers = [];
    var primes = [];
    var i, j;


    for (i = 2; i < max + 1; i++) {
      integers[i] = true;
    }

    integers[0] = false;
    integers[1] = false;

    i = 2;
    while (i <= Math.floor(Math.sqrt(max)) ) {
      if (integers[i]) {
        for (j = i * i; j <= max; j = j + i) {
          integers[j] = false;
        }
      }
      i++ ;
    }

    for (i = 0; i < integers.length; i++) {
      if (integers[i]) {
        primes.push(i);
      }
    }
    return primes;
  }

  function getPiFunction(n) {
    if (typeof n === "string") {
      throw new TypeError("Expected an integer greater than one, but got a string");
    }
   return getPrimes(n).length;
  }

  function isPrime(n) {
    validateType(n, 'number');
    var primes = getPrimes(Math.floor(Math.sqrt(n)));
    var returnValue = true;

    for (var i = 0; i < primes.length; i++) {
      if (n  % primes[i] === 0) {
        returnValue = false;
        break;
      }
    }
    return returnValue;
  }

  function isEmirp(n) {
    return isPrime(n) && isPrime(getMirror(n)) ;
  }

  //todo: fix bug here.  numbers are returned as strings
  function getMirror(arg) {
    var returnValue;

    switch (typeof arg) {
      case 'string':
        returnValue = arg.split().reverse().join();
        break;
      case 'number':
        returnValue = parseInt(arg.toString(10).split().reverse().join(),10);
        break;
      default:
        console.log('foo');
    }
    return returnValue;
  }



module.exports.isEmirp = isEmirp ;
module.exports.getPrimes = getPrimes ;
module.exports.getMirror = getMirror ;
module.exports.getPiFunction = getPiFunction ;
module.exports.isPrime = isPrime ;

function isCorrectType(argument, type) {
  return typeof argument === type;
}

function validateType(argument, type) {
  if (typeof argument !== type) {
    throw new TypeError("Expected " + argument + " to be a " + type + " but it's a " + typeof argument);
  }
}
