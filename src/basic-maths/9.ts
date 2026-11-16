// Check for Prime Number

function isPrime(n: number): boolean {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(5)); // true
console.log(isPrime(8)); // false
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
