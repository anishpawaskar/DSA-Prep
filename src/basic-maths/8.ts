// Check for Perfect Number

function isPerfect(n: number): boolean {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && n !== i) {
      sum += i;
    }
  }

  return sum === n;
}

console.log(isPerfect(6)); // true
console.log(isPerfect(4)); // false
console.log(isPerfect(28)); // true
