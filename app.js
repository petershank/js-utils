var primes = require('./primes.js');


(function(){ 
    // function getSheldonNums(max) {
    //     return primes.getPrimes(max);
    // }
    // console.log(getSheldonNums(100));
    
    const animals = [23, 73, 79];
    function exactlyThree(word) {
        return word.length === 3;
    }
    const threeLetterAnimals = animals.filter(primes.isEmirp);
    console.log(threeLetterAnimals); // ["cat", "dog"]

    
    console.log('37 is prime: ' + primes.isPrime(37));
    
})(); 