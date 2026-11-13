// Check if the Number is Armstrong

function isArmstrong(n: number): boolean {
  const originalNumber = n;
  let totalDigits = 0;
  let tempNum = n;

  // Step 1: Count the digits
  while (tempNum > 0) {
    tempNum = Math.trunc(tempNum / 10);
    totalDigits++;
  }

  // Step 2: Extract digits and calculate powers
  tempNum = n;
  let sum = 0;

  while (tempNum > 0) {
    const currentDigit = tempNum % 10;
    sum += Math.pow(currentDigit, totalDigits);

    tempNum = Math.trunc(tempNum / 10);
  }

  return sum === originalNumber;
}

console.log(isArmstrong(153)); // true
console.log(isArmstrong(370)); // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123)); // false
