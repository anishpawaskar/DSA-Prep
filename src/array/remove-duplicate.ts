// Remove duplicate from sorted array
interface RemoveDuplicateReturnValue {
  k: number;
  nums: number[];
}

export function removeDuplicate(nums: number[]): RemoveDuplicateReturnValue {
  if (nums.length === 0) {
    return { k: 0, nums };
  }

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    const left = nums[i - 1];
    const right = nums[i];

    if (left !== right && right !== undefined) {
      nums[k] = right;
      k += 1;
    }
  }

  return {
    k,
    nums,
  };
}

console.log(removeDuplicate([1, 1, 2]));
