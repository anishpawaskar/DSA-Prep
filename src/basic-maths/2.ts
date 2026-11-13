// Count number of odd digits in a number

function countOddDigit(n: number): number {
  const numbers = n.toString();
  let oddNumCount = 0;

  while (n > 0) {
    const currentNum = n % 10;

    if (currentNum % 2 !== 0) {
      oddNumCount++;
    }

    n = Math.trunc(n / 10);
  }

  return oddNumCount;
}

console.log(countOddDigit(123));
