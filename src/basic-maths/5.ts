// Return the Largest Digit in a Number

function largestDigit(n: number): number {
  let largestNum: number = 0;

  while (n > 0) {
    const currentDigit = n % 10;

    if (currentDigit > largestNum) {
      largestNum = currentDigit;
    }

    n = Math.trunc(n / 10);
  }

  return largestNum;
}

console.log(largestDigit(25));
console.log(largestDigit(99));
