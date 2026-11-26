function NnumbersSum(n: number): number {
  if (n === 1) return 1;

  return n + NnumbersSum(n - 1);
}

console.log(NnumbersSum(3));
