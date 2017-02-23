function primeNumber(n) {
  var primes = [2];
  for (var i = 3; i < n; i++) {
    var isPrime = !primes.some(function (item) {
      return !(i % item);
    });
    if (isPrime) primes.push(i);
  }
  return primes;
}

console.log( primeNumber(1000).toString() );