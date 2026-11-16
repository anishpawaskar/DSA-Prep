function reverseArray(arr: number[]): number[] {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const leftNum = arr[i];
    const rightNum = arr[arr.length - 1 - i];

    if (leftNum !== undefined && rightNum !== undefined) {
      arr[i] = rightNum;

      arr[arr.length - 1 - i] = leftNum;
    }
  }

  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([1, 2]));
