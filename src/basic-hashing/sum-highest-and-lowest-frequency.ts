function sumHighestAndLowestFrequency(nums: number[]) {
  if (!nums.length) return -1;

  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  let highestFreq = -Infinity;
  let lowestFreq = Infinity;

  for (let [num, currentFreq] of map) {
    if (currentFreq > highestFreq) {
      highestFreq = currentFreq;
    }

    if (currentFreq < lowestFreq) {
      lowestFreq = currentFreq;
    }
  }

  return highestFreq + lowestFreq;
}

console.log(sumHighestAndLowestFrequency([1, 2, 2, 3, 3, 3]));
console.log(sumHighestAndLowestFrequency([4, 4, 5, 5, 6]));
console.log(sumHighestAndLowestFrequency([10, 9, 7, 7, 8, 8, 8]));
