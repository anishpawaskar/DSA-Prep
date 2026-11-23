function secondMostFrequentElement(nums: number[]) {
  if (!nums.length) return -1;

  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  let highestNum = -Infinity;
  let highestFreq = 0;

  let secondNum = -Infinity;
  let secondFreq = 0;

  for (let [num, freq] of map) {
    if (freq > highestFreq) {
      secondNum = highestNum;
      secondFreq = highestFreq;

      highestFreq = freq;
      highestNum = num;
    } else if (freq === highestFreq) {
      if (num < highestNum) {
        highestNum = num;
      }
    } else {
      if (freq > secondFreq || (freq === secondFreq && num < secondNum)) {
        secondFreq = freq;
        secondNum = num;
      }
    }
  }

  return secondFreq === 0 ? -1 : secondNum;
}

console.log(secondMostFrequentElement([1, 2, 2, 3, 3, 3]));
console.log(secondMostFrequentElement([4, 4, 5, 5, 6, 7]));
console.log(secondMostFrequentElement([10, 9, 7, 7]));
console.log(secondMostFrequentElement([4, 4, 5, 5]));
