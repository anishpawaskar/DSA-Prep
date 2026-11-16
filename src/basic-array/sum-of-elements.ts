function sum(arr: number[], n: number): number {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    const num = arr[i];

    if (num !== undefined) {
      sum += num;
    }
  }

  return sum;
}

console.log(sum([1, 2, 3, 4, 5], 5));
console.log(sum([1, 2, 1, 1, 5, 1], 6));
console.log(sum([1, 2, 1], 3));
