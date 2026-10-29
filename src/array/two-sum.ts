export function twoSum(nums: number[], target: number): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] !== undefined && nums[j] !== undefined) {
        const num1 = nums[i];
        const num2 = nums[j];

        if (num1 === undefined || num2 === undefined) continue;

        const sum = num1 + num2;

        if (sum === target) {
          result.push(i, j);
          break;
        }
      }
    }
  }

  return result;
}

console.log("Two Sum :-", twoSum([2, 3, 7, 11], 9));
