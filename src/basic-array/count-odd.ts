function countOdd(arr: number[], n: number): number {
  let count = 0;

  for (let i = 0; i < n; i++) {
    const num = arr[i];

    if (num !== undefined && num % 2 !== 0) {
      count++;
    }
  }

  return count;
}

console.log(countOdd([1, 2, 3, 4, 5], 5));
console.log(countOdd([1, 2, 1, 1, 5, 1], 6));
console.log(countOdd([1, 3, 5, 7, 9], 5));
