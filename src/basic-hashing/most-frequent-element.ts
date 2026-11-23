function mostFrequentElement(nums: number[]) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }

  let frequency = 0;
  let result = nums[0];

  for (let num of nums) {
    const currentNumFrequency = map.get(num);

    if (currentNumFrequency > frequency) {
      frequency = currentNumFrequency;
      result = num;
    }
  }

  return result;
}

console.log(mostFrequentElement([1, 2, 2, 3, 3, 3]));
console.log(mostFrequentElement([4, 4, 5, 5, 6]));
console.log(mostFrequentElement([2, 4, 3, 2, 5, 4]));
