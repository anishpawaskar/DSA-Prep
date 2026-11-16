// Count all Digits of a Number

function countDigit(n: number): number {
  if (n === 0) return 1;

  let count = 0;
  n = Math.abs(n);

  while (n > 0) {
    count++;
    n = Math.trunc(n / 10);
  }

  return count;
}

console.log(countDigit(0));
console.log(countDigit(14));
