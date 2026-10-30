export function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];

    if (digit === undefined) continue;

    if (digit < 9) {
      digits[i] = digit + 1;
      return digits;
    }

    digits[i] = 0;
  }

  return [1, ...digits];
}

console.log("Plus one", plusOne([1, 2, 3]));
console.log(
  "Plus one",
  plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]),
);
