// Palindrome Number

function isPalindrome(n: number): boolean {
  const originalNumber = n;
  let reverseNum = 0;

  while (n > 0) {
    const lastDigit = n % 10;
    reverseNum = reverseNum * 10 + lastDigit;

    n = Math.trunc(n / 10);
  }

  return originalNumber === reverseNum;
}

console.log(isPalindrome(121));
console.log(isPalindrome(123));
