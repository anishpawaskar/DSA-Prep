// Reverse a number

function reverseNumber(n: number): number {
  let reverseNum = 0;
  n = Math.abs(n);

  while (n > 0) {
    const lastDigit = n % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    n = Math.trunc(n / 10);
  }

  return reverseNum;
}

console.log(reverseNumber(123));
console.log(reverseNumber(10400));
