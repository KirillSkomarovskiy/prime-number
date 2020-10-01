'use strict';

/* Sieve of Eratosthenes */

export const primeNumber = (n) => {
  const arr = Array.from({ length: n }).fill(true, 2);
  
  for (let i = 2; i * i < n; i++) {
    if (!arr[i]) continue;
    
    for (let j = i * i; j < n; j += i) {
      arr[j] = false;
    }
  }
  
  return arr.reduce((acc, item, i) => item ? acc.concat(i) : acc, []);
};

