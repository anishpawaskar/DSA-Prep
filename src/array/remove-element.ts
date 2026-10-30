export function removeElement(nums: number[], val: number) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num === undefined) continue;

    if (num !== val && num !== undefined) {
      nums[k] = num;
      k += 1;
    }
  }

  return { k, nums };
}

console.log("Remove element", removeElement([3, 2, 2, 3, 5], 3));
