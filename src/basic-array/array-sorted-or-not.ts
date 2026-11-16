function arraySortedOrNot(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    const leftNum = arr[i - 1];
    const rightNum = arr[i];

    if (leftNum !== undefined && rightNum !== undefined && leftNum > rightNum) {
      return false;
    }
  }

  return true;
}

console.log(arraySortedOrNot([1, 2, 3, 4, 5]));
console.log(arraySortedOrNot([5, 4, 6, 7, 8]));
console.log(arraySortedOrNot([5, 4, 3, 2, 1]));
