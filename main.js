'use strict';

function first(n) {
  var primes = [2];
  for (var i = 3; i < n; i++) {
    var isPrime = !primes.some(function (item) {
      return !(i % item);
    });
    if (isPrime) primes.push(i);
  }
  return primes;
}

function second(n) {
  var primes = [2];
  var squaredPrimes = [4];
  for (var i = 3; i < n; i++) {
    var isPrime = !primes.some(function (item, j) {
      return !( ( (squaredPrimes[j] - 1 > i) ) || ( (i % item) ) );
    });
    if (isPrime) {
      primes.push(i);
      squaredPrimes.push(i * i);
    }
  }
  return primes;
}

function third(n) {
  var primes = [2];
  for (var i = 3; i < n; i++) {
    var isPrime = !primes.some(function (item) {
      return !( ( (item * item - 1 > i) ) || ( (i % item) ) );
    });
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

function fourth(n) {
  var primes = [2];
  var squaredPrimes = [4];
  for (var i = 3; i < n; i++) {
    var isPrime = !primes.some(function (item, j) {
      return !( ( (i % item) ) || ( (squaredPrimes[j] - 1 > i) ) ); //
    });
    if (isPrime) {
      primes.push(i);
      squaredPrimes.push(i * i);
    }
  }
  return primes;
}

function fifth(n) {
  var prime = [];
  var arr = Array(n);

  for (var i = 1; i < arr.length; arr[i++] = true);

  arr[1] = false;

  for (var i = 2; i * i < n; i++) {
    if ( arr[i] ) {
      for ( var j = i * i; j < n; j += i) {
        arr[j] = false;
      }
    }
  }

  arr.forEach(function (item, i) {
    if (item) prime.push(i);
  });

  return prime;
}

function benchmark(func, n) {
  console.time('time');
  for (var i = 0; i < 1; i++) func(n);
  console.timeEnd('time');

}
//console.log(benchmark(fifth, 500000));
console.log( fifth(1000).toString() );